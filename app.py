from flask import Flask, render_template, request
import pymongo

app = Flask(__name__, template_folder="templates")

myclient = pymongo.MongoClient("mongodb://mongodb:27017/mydatabase")
mydb = myclient["mydatabase"]
col = mydb["fortune_cookies"]

@app.route("/")
@app.route("/home")
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/datasets")
def datasets():
    random_document = col.aggregate([{ '$sample': { 'size': 1 } }]).next()
    return render_template("data.html", random_document=random_document)

@app.route("/form", methods=["GET","POST"])
def form():
    if request.method == "GET":
        return render_template("form.html")
    elif request.method == "POST":
        msg = request.form.get("message")
        mydict = { "message": msg }
        x = col.insert_one(mydict)
        if x.acknowledged == True:
            return render_template("success.html")
        else:
            return render_template("fail.html")
    else:
        return render_template("form.html")

@app.route("/debug")
def debug():
    data = col.find()
    result = []
    for document in data:
        result.append(document)
    return str(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)