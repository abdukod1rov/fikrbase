from flask import Flask, render_template, session
from article import Article

app = Flask(__name__)
app.secret_key = "thisissomethingsecure"

articles = Article.all()


@app.route("/articles")
def blog():
    return render_template("blog.html", articles=articles)


@app.route("/set-session")
def set_session():
    session['user_id'] = 1
    return "session set"


@app.route("/get-session")
def get_session():
    if session.get('user_id') is not None:
        return f"user_id = {session['user_id']}"
    return "session does not exist"


@app.route("/admin")
def admin():
    return render_template("login.html")


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/blog/<slug>")
def article(slug: str):
    article = articles[slug]
    return render_template("article.html", article=article)


if __name__ == "__main__":
    app.run(port=4200, debug=True)
