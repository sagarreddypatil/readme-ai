from flask import Flask, request, jsonify
from model import summarize

app = Flask(__name__)

# No need to define summarize function here
default_length = 150

@app.route('/summarize', methods=['POST'])
def summarize_endpoint():
    try:
        data = request.get_json()

        if 'text' not in data:
            return jsonify({'error': 'Missing required parameters'}), 400

        text = data['text']
        length = data.get('length', default_length)

        # Call your existing summarize function directly
        result = summarize(text, length)

        return jsonify({'summary': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
