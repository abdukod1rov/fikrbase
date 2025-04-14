from flask import Flask, render_template, session
import markdown
from markupsafe import Markup
from article import Article
import frontmatter
import emoji
from utils import preserve_html_attributes, post_process_html

app = Flask(__name__)

app.secret_key = "thisissomethingsecure"

articles = Article.all()
print(articles)
for item in articles.values():
    print(item.search_tile)


@app.route("/articles/article_detail")
def article_detail_md():
    with open(f"articles/http-request-lifecycle.md", encoding='utf-8') as file:
        post = frontmatter.load(file)
        metadata = post.metadata
        content = post.content

    return render_template("article_detail.html",
                           content=content,
                           title=metadata.get('title'),
                           date=metadata.get('date'),
                           author=metadata.get('author'),
                           category=metadata.get('category'),
                           tags=metadata.get('tags', [])
                           )


@app.route("/blog")
def blog():
    return render_template("blog.html", articles=articles)


@app.route("/about")
def about():
    return "This is an about page, hehe 😊"

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
    post = articles[slug]
    return render_template("article_detail.html",post=post)


@app.template_filter('markdown')
def render_markdown(text):
    md = markdown.Markdown(extensions=[
        'markdown.extensions.fenced_code',
        'markdown.extensions.tables',
        'markdown.extensions.codehilite',
        'markdown.extensions.toc',
        'markdown.extensions.sane_lists',  # Better list handling
        'markdown.extensions.smarty',  # Smart punctuation
        'markdown.extensions.meta',  # Metadata handling
        'markdown.extensions.attr_list',  # Attribute lists
        'markdown.extensions.def_list',  # Definition lists
        'markdown.extensions.extra',
        'markdown.extensions.abbr',
        'markdown.extensions.md_in_html',
        'markdown.extensions.admonition',
        'markdown.extensions.legacy_attrs',
        'markdown.extensions.legacy_em',
        'markdown.extensions.nl2br',
        'markdown.extensions.wikilinks',
    ])

    # Convert markdown to HTML
    html = md.convert(text)
    return Markup(html)


if __name__ == "__main__":
    app.run(port=4200, debug=True)
