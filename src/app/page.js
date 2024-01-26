import RootLayout from './layout'
import projects from '../../public/project.js'
import { Navbar, Header, Contact, ProjectsHeader, Project } from './components';
import Exp from './components/Exp';

export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <div className="flex flex-col relative z-0 gap-20 px-5 md:px-8 lg:px-12">
        <Header />
        <Contact />
        <ProjectsHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[-50px] md:px-12">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <Exp />
      </div>
    </RootLayout>
  )
}