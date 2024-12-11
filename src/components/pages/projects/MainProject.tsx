import ProjectItem from './ProjectItem';
import ProjectInput from './ProjectInput';

const MainProject = () => {
  const projects = [
    {
      image: '/assets/images/projects/pj1.jpg',
      content:
        'Việt Nam Meiwa “phủ xanh mái nhà xưởng”, chọn DAT Group làm Tổng thầu EPC dự án 1,7MWp',
    },
    {
      image: '/assets/images/projects/pj2.jpg',
      content:
        'Việt Nam Meiwa “phủ xanh mái nhà xưởng”, chọn DAT Group làm Tổng thầu EPC dự án 1,7MWp',
    },
    {
      image: '/assets/images/projects/pj3.jpg',
      content:
        'Việt Nam Meiwa “phủ xanh mái nhà xưởng”, chọn DAT Group làm Tổng thầu EPC dự án 1,7MWp',
    },
    {
      image: '/assets/images/projects/pj4.png',
      content:
        'Việt Nam Meiwa “phủ xanh mái nhà xưởng”, chọn DAT Group làm Tổng thầu EPC dự án 1,7MWp',
    },
  ];

  return (
    <div className="container mb-20 mt-20">
      <h1 className="mb-8 text-center text-4xl font-semibold uppercase text-gray-700">Dự án</h1>
      <ProjectInput />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((item, key) => (
          <ProjectItem content={item.content} key={key} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default MainProject;
