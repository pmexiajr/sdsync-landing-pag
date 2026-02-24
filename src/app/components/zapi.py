import os
import requests
from dotenv import load_dotenv

load_dotenv()

class ZAPI:
    def __init__(self):
        self.instance_id = os.getenv("ZAPI_INSTANCE_ID")
        self.token = os.getenv("ZAPI_TOKEN")
        self.client_token = os.getenv("ZAPI_CLIENT_TOKEN")
        self.base_url = f"https://api.z-api.io/instances/{self.instance_id}/token/{self.token}"
        self.endpoints = {
            "text": "/send-text",
            "image": "/send-image",
            "video": "/send-video",
            "audio": "/send-audio",
            "document": "/send-document",
            "link": "/send-link",
            "location": "/send-location",
            "contact": "/send-contact",
            "buttons": "/send-buttons",
            "list": "/send-list",
            "carousel": "/send-carousel",
        }

    def _format_number(self, to_number):
        return ''.join(filter(str.isdigit, str(to_number)))

    def _headers(self):
        return {
            "Client-Token": self.client_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }

    def _log_ok(self, endpoint, phone):
        print(f"\033[92m✓ Enviado {endpoint}\033[0m")

    def _log_fail(self, endpoint, phone, msg):
        print(f"\033[91m✗ Falha {endpoint} → {phone} | {msg}\033[0m")

    def _log_skip(self, reason):
        print(f"\033[93m↷ Envio ignorado ({reason})\033[0m")

    def _send(self, to_number, endpoint, payload, delay, presence, inverterStatus_send_mensage, DailyReport_send_mensage):
        if not inverterStatus_send_mensage:
            self._log_skip("inverterStatus")
            return {"status": "skipped"}

        if not DailyReport_send_mensage:
            self._log_skip("DailyReport")
            return {"status": "skipped"}

        phone = self._format_number(to_number)
        if not phone:
            self._log_fail(endpoint, to_number, "número inválido")
            return {"status": "error","reason": "invalid phone"}

        delay_seconds = max(1, min(int(delay / 1000), 15))
        delay_typing = 2 if presence == "composing" else 0

        payload.update({
            "phone": phone,
            "delayMessage": delay_seconds,
            "delayTyping": delay_typing
        })

        url = f"{self.base_url}{endpoint}"

        try:
            response = requests.post(url, headers=self._headers(), json=payload, timeout=30)

            if response.status_code == 200:
                data = response.json()
                self._log_ok(endpoint, phone)
                return {"status": "sent","messageId": data.get("messageId"),"zaapId": data.get("zaapId"),"response": data}

            self._log_fail(endpoint, phone, f"HTTP {response.status_code}")
            return {"status": "failed","http": response.status_code,"details": response.text}

        except Exception as e:
            self._log_fail(endpoint, phone, str(e))
            return {"status": "error","details": str(e)}

    def send_text(self, to_number, message, delay=5000, presence="composing", inverterStatus_send_mensage=True, DailyReport_send_mensage=True):
        if not message:
            self._log_fail(self.endpoints["text"], to_number, "mensagem vazia")
            return {"status": "error","reason": "empty message"}
        payload = {"message": message}
        return self._send(to_number, self.endpoints["text"], payload, delay, presence, inverterStatus_send_mensage, DailyReport_send_mensage)

    def send_image(self, to_number, image, caption=None, viewOnce=False, delay=5000, presence="composing", inverterStatus_send_mensage=True, DailyReport_send_mensage=True):
        if not image or not isinstance(image, str):
            self._log_fail(self.endpoints["image"], to_number, "imagem inválida")
            return {"status": "error","reason": "image required"}
        if not image.startswith("http") and not image.startswith("data:image"):
            self._log_fail(self.endpoints["image"], to_number, "formato inválido")
            return {"status": "error","reason": "invalid image"}
        payload = {"image": image,"caption": caption,"viewOnce": viewOnce}
        return self._send(to_number, self.endpoints["image"], payload, delay, presence, inverterStatus_send_mensage, DailyReport_send_mensage)