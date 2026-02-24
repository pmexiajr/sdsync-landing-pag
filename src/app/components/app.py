from flask import Flask, request, jsonify
from flask_cors import CORS
from zapi import ZAPI
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)

zapi = ZAPI()
target_number = os.getenv("ZAPI_TARGET_NUMBER", "44988110181")

@app.route('/api/send-demo-whatsapp', methods=['POST'])
def send_demo():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    company = data.get('company')
    date_str = data.get('date')
    message = data.get('message')

    if not all([name, email, phone, date_str]):
        return jsonify({'error': 'Campos obrigatórios não preenchidos'}), 400

    try:
        dt = datetime.fromisoformat(date_str)
        date_formatted = dt.strftime('%d/%m/%Y')
        time_formatted = dt.strftime('%H:%M')
    except:
        date_formatted = date_str
        time_formatted = ''

    whatsapp_message = f"""*NOVO AGENDAMENTO DE DEMONSTRAÇÃO*

Um novo agendamento foi realizado através do site SDSync.

━━━━━━━━━━━━━━━━━━
👤 *Nome:* {name}
📧 *E-mail:* {email}
📱 *Telefone:* {phone}
🏢 *Empresa:* {company or 'Não informada'}
━━━━━━━━━━━━━━━━━━
Data e horário sugeridos da reunião:

📅 *Data:* {date_formatted}
⏰ *Horário:* {time_formatted}

📝 *Observações do Cliente:*
{message or 'Nenhuma observação'}

━━━━━━━━━━━━━━━━━━
"""

    result = zapi.send_text(
        to_number=target_number,
        message=whatsapp_message,
        delay=5000,
        presence="composing"
    )

    if result.get('status') == 'sent':
        return jsonify({'success': True, 'data': result})
    else:
        return jsonify({'error': 'Falha ao enviar mensagem WhatsApp'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)