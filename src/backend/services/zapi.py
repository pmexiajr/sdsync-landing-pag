import os
import requests


class ZAPI:
    def __init__(self):
        self.instance_id = os.getenv("ZAPI_INSTANCE_ID")
        self.token = os.getenv("ZAPI_TOKEN")
        self.client_token = os.getenv("ZAPI_CLIENT_TOKEN")

        if not all([self.instance_id, self.token, self.client_token]):
            raise ValueError("Variáveis de ambiente da ZAPI não configuradas")

        self.base_url = f"https://api.z-api.io/instances/{self.instance_id}/token/{self.token}"

    def _headers(self):
        return {
            "Client-Token": self.client_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }

    def _format_number(self, number: str) -> str:
        return ''.join(filter(str.isdigit, str(number)))

    def send_text(self, to_number: str, message: str) -> dict:
        if not message:
            return {"status": "error", "reason": "empty message"}

        phone = self._format_number(to_number)

        if not phone:
            return {"status": "error", "reason": "invalid phone"}

        url = f"{self.base_url}/send-text"

        payload = {
            "phone": phone,
            "message": message,
            "delayMessage": 3,
            "delayTyping": 2
        }

        try:
            response = requests.post(
                url,
                headers=self._headers(),
                json=payload,
                timeout=15
            )

            if response.status_code == 200:
                return {"status": "sent"}

            return {
                "status": "failed",
                "http": response.status_code,
                "details": response.text
            }

        except requests.RequestException as e:
            return {
                "status": "error",
                "details": str(e)
            }