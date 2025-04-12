// Get the article filename from URL parameters
function getArticleFilename() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('article') || 'http-request-lifecycle'; // Default article
}

// Function to fetch and render markdown content
async function loadArticle() {
    const articleName = getArticleFilename();
    const articlePath = `../articles/article_detail_md`;
    
    try {
        // Fetch the markdown file
        const response = await fetch(articlePath);
        
        if (!response.ok) {
            throw new Error(`Failed to load article (${response.status}: ${response.statusText})`);
        }
        
        const markdownContent = await response.text();
        
        // Parse markdown frontmatter (metadata at the top of the file)
        const metadata = parseMetadata(markdownContent);
        const contentWithoutMetadata = removeMetadata(markdownContent);
        
        // Update page title
        document.getElementById('page-title').textContent = `${metadata.title} - Samandar's Tech Blog`;
        document.getElementById('article-title').textContent = metadata.title;
        
        // Update metadata
        document.getElementById('article-date').textContent = metadata.date || '';
        document.getElementById('article-category').textContent = metadata.category || '';
        document.getElementById('article-author').textContent = metadata.author ? `By ${metadata.author}` : '';
        
        // Set up marked.js options
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            },
            langPrefix: 'hljs language-',
            headerIds: true,
            mangle: false
        });
        
        // Render markdown content
        const htmlContent = marked.parse(contentWithoutMetadata);
        document.getElementById('article-content').innerHTML = htmlContent;
        
        // Process images to add captions
        addImageCaptions();
        
        // Add tags if available
        if (metadata.tags && metadata.tags.length) {
            const tagsContainer = document.getElementById('article-tags');
            tagsContainer.innerHTML = '';
            
            metadata.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
        }
        
        // Update navigation links based on your blog structure
        updateNavigation(articleName);
        
        // Hide loading, show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('post-content').style.display = 'block';
        
    } catch (error) {
        console.error('Error loading article:', error);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error-container').style.display = 'block';
        document.getElementById('error-message').textContent = `Failed to load article: ${error.message}`;
    }
}

// Parse metadata from markdown frontmatter
function parseMetadata(markdown) {
    const metadata = {
        title: 'Untitled Article',
        date: '',
        category: '',
        author: '',
        tags: []
    };
    
    // Check if markdown has frontmatter (starts with ---)
    if (!markdown.startsWith('---')) {
        return metadata;
    }
    
    try {
        // Extract the frontmatter section
        const frontmatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
        
        if (frontmatterMatch && frontmatterMatch[1]) {
            const frontmatter = frontmatterMatch[1];
            
            // Extract title
            const titleMatch = frontmatter.match(/title:\s*(.+)$/m);
            if (titleMatch) metadata.title = titleMatch[1].trim();
            
            // Extract date
            const dateMatch = frontmatter.match(/date:\s*(.+)$/m);
            if (dateMatch) metadata.date = dateMatch[1].trim();
            
            // Extract category
            const categoryMatch = frontmatter.match(/category:\s*(.+)$/m);
            if (categoryMatch) metadata.category = categoryMatch[1].trim();
            
            // Extract author
            const authorMatch = frontmatter.match(/author:\s*(.+)$/m);
            if (authorMatch) metadata.author = authorMatch[1].trim();
            
            // Extract tags
            const tagsMatch = frontmatter.match(/tags:\s*\[(.*)\]/m);
            if (tagsMatch && tagsMatch[1]) {
                metadata.tags = tagsMatch[1].split(',').map(tag => tag.trim());
            } else {
                // Alternative format: tags on multiple lines
                const tagsListMatch = frontmatter.match(/tags:\s*\n([\s\S]*?)(?:\n\w+:|$)/m);
                if (tagsListMatch && tagsListMatch[1]) {
                    metadata.tags = tagsListMatch[1]
                        .split('\n')
                        .filter(line => line.trim().startsWith('-'))
                        .map(line => line.replace('-', '').trim());
                }
            }
        }
    } catch (e) {
        console.error('Error parsing frontmatter:', e);
    }
    
    return metadata;
}

// Remove metadata frontmatter from markdown content
function removeMetadata(markdown) {
    if (markdown.startsWith('---')) {
        return markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
    }
    return markdown;
}

// Process images to add captions based on alt text
function addImageCaptions() {
    const images = document.querySelectorAll('.post-content img');
    
    images.forEach(img => {
        if (img.alt && img.alt.trim() !== '') {
            // Create caption element
            const caption = document.createElement('div');
            caption.className = 'image-caption';
            caption.textContent = img.alt;
            
            // Insert after image
            if (img.nextSibling) {
                img.parentNode.insertBefore(caption, img.nextSibling);
            } else {
                img.parentNode.appendChild(caption);
            }
        }
    });
}

// Update navigation links based on current article
function updateNavigation(currentArticle) {
    // This would be replaced with your actual navigation logic
    // You might fetch this data from a JSON file or generate it on the server
    
    // For example, a simple navigation map:
    const articleNavigation = {
        'docker-kubernetes-microservices': {
            prev: null,
            next: 'building-scalable-api-go-postgresql'
        },
        'building-scalable-api-go-postgresql': {
            prev: 'docker-kubernetes-microservices',
            next: 'python-async-programming'
        },
        'python-async-programming': {
            prev: 'building-scalable-api-go-postgresql',
            next: 'http-request-lifecycle'
        },
        'http-request-lifecycle': {
            prev: 'python-async-programming',
            next: null
        }
    };
    
    const nav = articleNavigation[currentArticle] || { prev: null, next: null };
    const prevLink = document.getElementById('prev-link');
    const nextLink = document.getElementById('next-link');
    
    // Update previous link
    if (nav.prev) {
        prevLink.href = `blog-post-detail.html?article=${nav.prev}`;
        // You could also store titles in the navigation map
        prevLink.querySelector('#prev-title').textContent = nav.prev.replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    } else {
        prevLink.style.visibility = 'hidden';
    }
    
    // Update next link
    if (nav.next) {
        nextLink.href = `blog-post-detail.html?article=${nav.next}`;
        nextLink.querySelector('#next-title').textContent = nav.next.replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    } else {
        nextLink.style.visibility = 'hidden';
    }
}

// Load the article when the page loads
document.addEventListener('DOMContentLoaded', loadArticle);
