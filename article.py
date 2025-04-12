import os
from slugify import slugify
import frontmatter

class Article:
    def __init__(self, title):
        self.search_tile = title
        self.content = ""
        self.author = ""
        self.date = ""
        self.category = ""
        self.title = ""
        self.preview = ""
        self.tags = []

    @property
    def slug(self):
        return slugify(self.search_tile)

    def load_content(self):
        with open(f"articles/{self.search_tile}") as file:
            post = frontmatter.load(file)
            metadata = post.metadata
            self.author = metadata.get('author')
            self.title = metadata.get('title')
            self.date = metadata.get('date')
            self.category = metadata.get('category')
            self.tags = metadata.get('tags', [])
            self.preview = metadata.get('preview')
            self.content = post.content

    @classmethod
    def all(cls):
        titles = os.listdir("articles")
        slug_articles = {}
        for title in titles:
            slug_md = slugify(title)
            slug = slug_md[:-3]
            article = Article(title)
            article.load_content()
            article.search_tile = article.search_tile[:-3]
            slug_articles[slug] = article

        return slug_articles
    

