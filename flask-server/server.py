from flask import Flask

app = Flask(__name__)

#Members API Route
#.\activate in the Scripts Folder to activate the venv
#python server.py
@app.route("/members")
def members():
    return {"members": ["Roofing", "Photo Gallery", "Quotes"]}

if __name__ == "__main__":
    app.run(debug=True)