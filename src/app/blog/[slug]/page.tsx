
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Mock data for a single post - in a real app, this would be fetched based on slug
const mockBlogPosts = [
  {
    slug: 'mastering-remote-interviews',
    title: 'Mastering Remote Interviews: Tips for Tech Professionals',
    excerpt: 'Remote interviews are the new norm. Learn how to ace your next virtual interview with these expert tips and tricks for showcasing your skills effectively.',
    author: 'Jane Doe, HR Specialist',
    date: 'October 26, 2024',
    imageUrl: '/images/Mastering Remote Interviews 800x400.png',
    imageHint: 'video call interview focus',
    category: 'Career Advice',
    tags: ['Interviews', 'Remote Work', 'Job Seeking'],
    content: `
      <p>Remote interviews have rapidly become a standard part of the hiring process, especially in the tech industry. While they offer convenience, they also present unique challenges. Succeeding in a virtual interview requires a different approach than traditional face-to-face meetings. Here’s a comprehensive guide to help you navigate and ace your next remote tech interview.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Prepare Your Tech and Environment</h2>
      <p>First impressions count, even virtually. Ensure your technical setup is flawless:</p>
      <ul class="list-disc list-inside my-3 space-y-1 pl-4">
        <li><strong>Stable Internet Connection:</strong> Test your internet speed. If possible, use a wired connection for more stability.</li>
        <li><strong>Quality Webcam and Microphone:</strong> Your built-in laptop camera and mic might be okay, but an external webcam and a dedicated microphone can significantly improve video and audio quality.</li>
        <li><strong>Software Check:</strong> Download and test the interview platform (Zoom, Google Meet, Microsoft Teams, etc.) beforehand. Familiarize yourself with its features.</li>
        <li><strong>Lighting:</strong> Ensure your face is well-lit, preferably with natural light from a window in front of you or a soft lamp. Avoid backlighting.</li>
        <li><strong>Clean and Professional Background:</strong> Choose a tidy, distraction-free background. A plain wall or a subtle virtual background can work well.</li>
        <li><strong>Minimize Distractions:</strong> Inform your household about your interview schedule, silence your phone, and close unnecessary applications on your computer.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Dress Professionally</h2>
      <p>Even though you're at home, dress as you would for an in-person interview. This not only makes a good impression but also helps you get into a professional mindset.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Practice Non-Verbal Communication</h2>
      <p>Non-verbal cues are harder to convey and pick up remotely. Be mindful of:</p>
      <ul class="list-disc list-inside my-3 space-y-1 pl-4">
        <li><strong>Eye Contact:</strong> Look at the webcam, not just at the interviewer's image on your screen. This simulates direct eye contact.</li>
        <li><strong>Body Language:</strong> Sit up straight, nod to show engagement, and use hand gestures naturally. Avoid fidgeting.</li>
        <li><strong>Facial Expressions:</strong> Smile and be expressive to convey enthusiasm and approachability.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-3">4. Prepare for Common Tech Interview Questions</h2>
      <p>Be ready to discuss your projects, problem-solving skills, and technical expertise. For tech roles, coding challenges are common. Ensure you're comfortable sharing your screen and coding live if required. Have your portfolio, GitHub, or any relevant links ready to share.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">5. Ask Insightful Questions</h2>
      <p>Prepare questions to ask the interviewer about the role, team, company culture, or technical challenges. This shows your genuine interest.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">6. Handle Technical Glitches Gracefully</h2>
      <p>If a technical issue occurs (e.g., your internet drops or the platform freezes), stay calm. Apologize briefly and try to resolve it quickly. Have a backup plan, like offering to switch to a phone call if video isn't working.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">7. Follow Up</h2>
      <p>Send a thank-you email within 24 hours, just as you would for an in-person interview. Reiterate your interest in the role and mention any specific points from the discussion.</p>

      <p class="mt-4">By preparing thoroughly and paying attention to the nuances of virtual communication, you can make a strong impression and significantly increase your chances of landing your next tech role. Good luck!</p>
    `,
  },
  {
    slug: 'top-10-in-demand-tech-skills-2025',
    title: 'Top 10 In-Demand Tech Skills for 2025',
    excerpt: 'Stay ahead of the curve. Discover the most sought-after technology skills in the job market for the upcoming year and how to develop them.',
    author: 'John Smith, Tech Analyst',
    date: 'October 20, 2024',
    imageUrl: '/images/Top 10 In-Demand Tech Skills for 2025.png',
    imageHint: 'futuristic technology data',
    category: 'Industry Trends',
    tags: ['Tech Skills', 'Future of Work', 'AI', 'Cloud', 'Cybersecurity'],
    content: `
      <p class="mb-4">The technology landscape is constantly evolving, and so are the skills required to thrive in it. As we look towards 2025, several key areas are emerging as critical for tech professionals. Staying updated with these skills can significantly boost your career prospects. Here are the top 10 in-demand tech skills for 2025:</p>

      <ol class="list-decimal list-inside space-y-4 pl-4">
        <li>
          <strong class="font-semibold">Artificial Intelligence (AI) and Machine Learning (ML):</strong> From natural language processing to predictive analytics, AI/ML continues to dominate. Skills in Python, TensorFlow, PyTorch, and data modeling are crucial.
        </li>
        <li>
          <strong class="font-semibold">Cybersecurity:</strong> With increasing digital threats, cybersecurity professionals are more in demand than ever. Expertise in threat detection, ethical hacking, data privacy, and security architecture is vital.
        </li>
        <li>
          <strong class="font-semibold">Cloud Computing:</strong> Proficiency in platforms like AWS, Azure, and Google Cloud, along with skills in cloud architecture, migration, and management (including serverless and containers like Kubernetes) remains essential.
        </li>
        <li>
          <strong class="font-semibold">Data Science and Big Data Analytics:</strong> The ability to analyze large datasets, derive insights, and communicate findings is key. Skills in SQL, R, Python (Pandas, NumPy), and data visualization tools (Tableau, PowerBI) are important.
        </li>
        <li>
          <strong class="font-semibold">Software Development (Full-Stack):</strong> Versatile developers who can work on both frontend (React, Angular, Vue.js) and backend (Node.js, Python/Django, Java/Spring) technologies are highly valued.
        </li>
        <li>
          <strong class="font-semibold">DevOps and CI/CD:</strong> Automating software development and deployment pipelines using tools like Jenkins, GitLab CI, Docker, and Kubernetes is a core skill for efficient software delivery.
        </li>
        <li>
          <strong class="font-semibold">Internet of Things (IoT):</strong> As more devices get connected, skills in IoT development, embedded systems, and IoT security are growing in importance.
        </li>
        <li>
          <strong class="font-semibold">Blockchain Technology:</strong> Beyond cryptocurrencies, blockchain's applications in supply chain, healthcare, and finance require developers with expertise in smart contracts and distributed ledger technology.
        </li>
        <li>
          <strong class="font-semibold">UX/UI Design:</strong> Creating intuitive and engaging user experiences is paramount. Skills in Figma, Sketch, Adobe XD, user research, and interaction design are in high demand.
        </li>
        <li>
          <strong class="font-semibold">Robotic Process Automation (RPA):</strong> Automating repetitive business processes using RPA tools like UiPath and Blue Prism is a growing field seeking skilled developers and analysts.
        </li>
      </ol>

      <p class="mt-6">Investing time in learning and honing these skills will not only make you a more attractive candidate but also equip you for the future challenges and opportunities in the dynamic world of technology.</p>
    `,
  },
  {
    slug: 'building-a-killer-developer-portfolio',
    title: 'Building a Killer Developer Portfolio That Gets You Hired',
    excerpt: 'Your portfolio is your sales pitch. Learn how to create an impressive developer portfolio that highlights your projects and abilities to potential employers.',
    author: 'Alice Brown, Senior Developer',
    date: 'October 15, 2024',
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'developer coding portfolio',
    category: 'Development',
    tags: ['Portfolio', 'Web Development', 'Career', 'GitHub'],
    content: `
      <p class="mb-4">For developers, a portfolio is more than just a resume supplement; it's a dynamic showcase of your skills, projects, and passion for coding. A well-crafted portfolio can be the deciding factor in landing your dream job. Here's how to build a killer developer portfolio:</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Choose the Right Platform</h2>
      <p>You can build your portfolio from scratch using HTML, CSS, and JavaScript (and your favorite framework), or use platforms like GitHub Pages, Netlify, or Vercel for easy hosting. Consider a custom domain for a professional touch.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Highlight Your Best Projects</h2>
      <p>Quality over quantity. Select 2-4 of your most impressive projects. For each project:</p>
      <ul class="list-disc list-inside my-3 space-y-1 pl-4">
        <li>Provide a clear title and a concise description.</li>
        <li>Explain the problem it solves and your role in the project.</li>
        <li>List the technologies used (be specific with frameworks and libraries).</li>
        <li>Include links to the live demo and the source code (e.g., GitHub repository).</li>
        <li>Add screenshots or a short video walkthrough.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Write a Compelling "About Me" Section</h2>
      <p>This is your chance to tell your story. Briefly introduce yourself, your passion for technology, your key skills, and what kind of roles you're interested in. Let your personality shine through.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">4. Showcase Your Skills Clearly</h2>
      <p>List your technical skills, categorizing them if possible (e.g., Languages, Frameworks/Libraries, Tools, Databases). Be honest about your proficiency level.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">5. Make it Responsive and Visually Appealing</h2>
      <p>Your portfolio site itself is a project. Ensure it's well-designed, easy to navigate, and responsive across all devices. A clean, modern look is generally preferred.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">6. Include a Clear Call to Action and Contact Information</h2>
      <p>Make it easy for recruiters to reach you. Include links to your LinkedIn, GitHub, and a professional email address. A contact form can also be useful.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">7. Add Testimonials or Recommendations (Optional)</h2>
      <p>If you have positive feedback from previous employers, clients, or colleagues, consider adding a short testimonials section.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">8. Keep it Updated</h2>
      <p>As you complete new projects or learn new skills, update your portfolio. It should be a living document that reflects your growth as a developer.</p>

      <p class="mt-6">A strong developer portfolio takes time and effort to build, but it's an invaluable asset in your job search. Start today, iterate, and create a portfolio that truly represents your capabilities!</p>
    `,
  },
  {
    slug: 'navigating-first-tech-job',
    title: "Navigating Your First Tech Job: A Beginner's Guide",
    excerpt: "Landing your first job in the tech industry can be exciting and daunting. This guide provides essential tips for new graduates and career changers to succeed.",
    author: "Chris Lee, Tech Mentor",
    date: "October 29, 2024",
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'desk computer learning',
    category: "Career Development",
    tags: ["First Job", "Tech Career", "Guidance", "Entry Level"],
    content: `

      <p class="mb-4">Starting your first job in the tech industry is a significant milestone. Whether you're a recent graduate or a career changer, the initial period can be both thrilling and overwhelming. This guide offers practical advice to help you navigate these early stages successfully.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Embrace the Learning Curve</h2>
      <p>No one expects you to know everything from day one. Your first few months will be a steep learning curve. Be open to learning new technologies, processes, and a new company culture. Ask questions, take notes, and don't be afraid to admit when you don't understand something. Employers value a willingness to learn over feigned expertise.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Understand Your Role and Expectations</h2>
      <p>Clarify your responsibilities and what's expected of you in your role. Understand your team's goals and how your work contributes to them. Regular check-ins with your manager can help ensure you're on the right track and address any concerns early on.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Build Relationships</h2>
      <p>Networking within your company is crucial. Get to know your colleagues, not just on your immediate team but across different departments. These connections can be invaluable for collaboration, mentorship, and future opportunities. Participate in team activities and company events if possible.</p>
      <ul class="list-disc list-inside my-3 space-y-1 pl-4">
        <li>Seek out a mentor if your company has a formal program, or informally connect with experienced colleagues.</li>
        <li>Offer help to others when you can; it's a great way to learn and build rapport.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-3">4. Focus on Small Wins and Seek Feedback</h2>
      <p>Break down larger tasks into smaller, manageable ones. Achieving these small wins will build your confidence and demonstrate your capabilities. Actively seek feedback on your work. Constructive criticism is essential for growth. Learn from your mistakes – everyone makes them, especially when starting out.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">5. Develop Soft Skills</h2>
      <p>Technical skills are important, but soft skills like communication, teamwork, problem-solving, and time management are equally vital in the tech industry. Practice clear and concise communication, both written and verbal. Learn to collaborate effectively with your team members.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">6. Be Proactive and Take Initiative</h2>
      <p>Once you have a grasp of your core responsibilities, look for opportunities to take initiative. This could be suggesting improvements to a process, volunteering for a challenging task, or learning a new skill that could benefit the team. Proactiveness is highly valued.</p>
      
      <p class="mt-6">Your first tech job is a foundation for your career. Approach it with enthusiasm, a desire to learn, and a proactive attitude, and you'll set yourself up for long-term success. Welcome to the industry!</p>
    `,
  },
];

interface BlogSlugPageProps {
  params: {
    slug: string;
  };
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post = mockBlogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the blog post you were looking for.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
        <header className="mb-8">
          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <Badge variant="secondary" className="mb-2">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <UserCircle className="h-5 w-5 mr-1.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-5 w-5 mr-1.5" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg mb-8 shadow-md"
          data-ai-hint={post.imageHint}
        />

        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 
            prose-headings:font-headline prose-headings:text-foreground prose-headings:font-semibold
            prose-p:leading-relaxed prose-p:mb-4
            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-1 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-1 prose-ol:mb-4
            prose-strong:font-semibold prose-strong:text-foreground
            prose-a:text-primary hover:prose-a:underline
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-6 prose-h3:mb-3"
          dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available.</p>' }} />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-primary" /> Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

// In a real app, you would use generateStaticParams to pre-render blog posts
// export async function generateStaticParams() {
//   // Fetch all blog slugs
//   return mockBlogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }



