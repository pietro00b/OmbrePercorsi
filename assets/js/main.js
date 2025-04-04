---
---
/* Base */
body {
  font-family: 'Libre Baskerville', 'Georgia', serif;
  line-height: 1.8;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}

a {
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: #777;
  text-decoration: underline;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.site-header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 40px 0;
}

.site-header-container {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.site-title {
  margin: 0 0 10px;
  font-size: 2.5em;
  font-weight: bold;
  letter-spacing: 2px;
}

.site-title a {
  text-decoration: none;
  color: #333;
}

.site-description {
  font-style: italic;
  color: #777;
  margin: 0 0 30px;
}

/* Navigation */
.site-nav {
  margin: 20px auto;
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.site-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.site-nav li {
  margin: 0 15px;
}

.site-nav a {
  text-decoration: none;
  color: #777;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.site-nav a:hover {
  color: #333;
}

/* Home */
.home-intro {
  text-align: center;
  padding: 40px 0;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
}

.home-intro h2 {
  margin-bottom: 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.8em;
  position: relative;
}

.section-title:after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background-color: #333;
  margin: 15px auto 0;
}

/* Posts */
.post {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}

.post-meta {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 10px;
}

.post-meta time, .post-meta .location {
  margin-right: 15px;
}

.post-title {
  margin-top: 0;
  margin-bottom: 15px;
}

.post-title a {
  color: #333;
  text-decoration: none;
}

.post-title a:hover {
  color: #777;
}

.post-excerpt {
  margin-bottom: 15px;
}

.read-more {
  font-style: italic;
  margin-left: 5px;
}

/* Storia */
.storia-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.storia-title {
  font-size: 2.5em;
  margin-bottom: 15px;
}

.storia-meta {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 15px;
}

.storia-location {
  margin-left: 15px;
}

.storia-categories, .storia-tags {
  margin-top: 15px;
}

.category, .tag {
  display: inline-block;
  padding: 2px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 3px;
  background-color: #f1f1f1;
}

.category {
  background-color: #eee;
}

.tag {
  background-color: #f9f9f9;
  border: 1px solid #eee;
}

.storia-content {
  margin-bottom: 40px;
  font-size: 1.1em;
  line-height: 1.8;
}

.storia-content p {
  margin-bottom: 20px;
}

.storia-content h2 {
  margin: 40px 0 20px;
}

.storia-navigation {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.storia-navigation a {
  color: #333;
  text-decoration: none;
  max-width: 45%;
}

.storia-navigation a:hover {
  color: #777;
}

.prev:before {
  content: "« ";
}

.next:after {
  content: " »";
}

/* Gallery */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 30px 0;
}

.gallery-item {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.caption {
  padding: 10px;
  background: #f8f8f8;
  margin: 0;
  font-size: 0.9em;
  font-style: italic;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.lightbox-container {
  max-width: 90%;
  max-height: 90%;
}

.lightbox-container img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
}

.lightbox-caption {
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
}

/* Archive */
.archive {
  margin-bottom: 60px;
}

.archive h2 {
  margin-top: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.storie-list {
  list-style: none;
  padding: 0;
}

.storie-list li {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #eee;
}

.storie-list h3 {
  margin: 5px 0;
}

.storia-tags {
  margin-top: 10px;
}

.tag {
  font-size: 0.8em;
  margin-right: 10px;
  color: #777;
}

/* Footer */
.site-footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
  margin-top: 60px;
}

.site-footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-social a {
  color: #fff;
  margin-left: 15px;
  font-size: 1.2em;
}

.site-social a:hover {
  color: #ccc;
}

/* Button */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #555;
  color: #fff;
  text-decoration: none;
}

.see-all {
  text-align: center;
  margin: 40px 0;
}

/* Disqus */
.disqus {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #eee;
}

/* Responsive */
@media (max-width: 768px) {
  .site-title {
    font-size: 2em;
  }
  
  .storia-title {
    font-size: 2em;
  }
  
  .site-nav ul {
    flex-direction: column;
  }
  
  .site-nav li {
    margin: 5px 0;
  }
  
  .site-footer-container {
    flex-direction: column;
    text-align: center;
  }
  
  .site-social {
    margin-top: 20px;
  }
  
  .site-social a {
    margin: 0 10px;
  }
  
  .image-gallery {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .storia-navigation {
    flex-direction: column;
  }
  
  .storia-navigation a {
    max-width: 100%;
    margin-bottom: 10px;
  }
}
