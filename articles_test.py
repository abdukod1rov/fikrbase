from article import Article
import pytest



@pytest.fixture
def article():
    return Article("Test title")

def test_article_init(article):
    assert article.title == "Test title"
    assert article.content == "" 
    
def test_article_slug(article):
    assert article.slug == "test-title"
    

def test_article_slug_mock(mocker, article):
    #given
    mock_slugify = mocker.patch('article.slugify',return_value="test")
    
    #when
    slug_result = article.slug
    
    #then
    assert article.slug == "test"
    mocker.assert_called_with("Test title")