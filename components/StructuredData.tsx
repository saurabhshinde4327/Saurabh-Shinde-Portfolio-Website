export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Saurabh Shinde',
    jobTitle: 'Software Engineer & Data Scientist',
    description: 'Software Engineer and Data Scientist specializing in full-stack development, machine learning, and data analytics.',
    url: 'https://your-domain.com', // Update with your actual domain
    sameAs: [
      // Add your social media profiles
      // 'https://github.com/yourusername',
      // 'https://linkedin.com/in/yourusername',
      // 'https://twitter.com/yourusername',
    ],
    knowsAbout: [
      'Software Engineering',
      'Data Science',
      'Machine Learning',
      'Full Stack Development',
      'React',
      'Node.js',
      'Python',
      'Data Analytics',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

