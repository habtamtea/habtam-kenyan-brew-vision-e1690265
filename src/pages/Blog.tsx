export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Tea Selection',
      date: '2025-11-20',
      excerpt: 'Understanding the nuances of premium Kenyan tea selection...',
      category: 'Tea Guide',
    },
    {
      id: 2,
      title: 'Kenya Tea Highlands: Where Quality Begins',
      date: '2025-11-15',
      excerpt: 'Exploring the rich tea-growing regions of Kenya...',
      category: 'Origin Stories',
    },
    {
      id: 3,
      title: 'Sustainable Tea Farming Practices',
      date: '2025-11-10',
      excerpt: 'How we support ethical and sustainable farming...',
      category: 'Sustainability',
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Habtam Blog</h1>
        <p>Insights, stories, and updates from Habtam Limited</p>
      </div>

      <section className="blog-posts">
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <div className="post-header">
              <span className="category">{post.category}</span>
              <span className="date">{post.date}</span>
            </div>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="read-more">Read More →</a>
          </article>
        ))}
      </section>
    </div>
  );
}
