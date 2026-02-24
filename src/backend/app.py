from flask import Flask, request, jsonify
from flask_cors import CORS
from services.zapi import ZAPI
from dotenv import load_dotenv
from datetime import datetime
import os
import re

load_dotenv() 

app = Flask(__name__)
CORS(app)

zapi = ZAPI()
target_number = os.getenv("ZAPI_TARGET_NUMBER")


def is_valid_email(email: str) -> bool:
    return re.match(r"[^@]+@[^@]+\.[^@]+", email) is not None


def is_valid_phone(phone: str) -> bool:
    digits = re.sub(r"\D", "", phone)
    return len(digits) >= 10


@app.route('/api/send-demo-whatsapp', methods=['POST'])
def send_demo():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Payload inválido'}), 400

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    company = data.get('company')
    date_str = data.get('date')
    message = data.get('message')

    if not all([name, email, phone, date_str]):
        return jsonify({'error': 'Campos obrigatórios não preenchidos'}), 400

    if not is_valid_email(email):
        return jsonify({'error': 'Email inválido'}), 400

    if not is_valid_phone(phone):
        return jsonify({'error': 'Telefone inválido'}), 400

    try:
        dt = datetime.fromisoformat(date_str)
        date_formatted = dt.strftime('%d/%m/%Y')
        time_formatted = dt.strftime('%H:%M')
    except ValueError:
        date_formatted = date_str
        time_formatted = ''

    whatsapp_message = f"""*NOVO AGENDAMENTO DE DEMONSTRAÇÃO*

━━━━━━━━━━━━━━━━━━
👤 *Nome:* {name}
📧 *E-mail:* {email}
📱 *Telefone:* {phone}
🏢 *Empresa:* {company or 'Não informada'}
━━━━━━━━━━━━━━━━━━
📅 *Data:* {date_formatted}
⏰ *Horário:* {time_formatted}

📝 *Observações:*
{message or 'Nenhuma observação'}
━━━━━━━━━━━━━━━━━━
"""

    result = zapi.send_text(
        to_number=target_number,
        message=whatsapp_message
    )

    if result["status"] == "sent":
        return jsonify({'success': True}), 200

    return jsonify({'error': 'Falha ao enviar mensagem'}), 500


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)