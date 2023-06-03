import React from 'react'
import Nav from './Nav';
import FlipCon from './FlipCon';
import Footer from './Footer';

const About = () => {
  return (
    <section id='about'>
        <Nav/>
        <h1 id='head'>About</h1>
        <FlipCon image={"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"} content={['A Little Change" charity is dedicated to making a positive impact on communities by focusing on small-scale projects that create lasting change. Their mission is to address social issues, improve lives, and foster sustainable development through targeted initiatives', 'The charity follows a grassroots approach, recognizing that even small actions can make a significant difference. They believe in the power of collective efforts and work closely with local communities, listening to their needs, and involving them in the decision-making process', '"A Little Change" charity undertakes a wide range of projects across various areas of social impact. Their initiatives may include providing access to education, healthcare, clean water, sanitation, empowering marginalized groups, supporting local economies, and promoting environmental sustainability']} flip={false}></FlipCon>

        <FlipCon image={"https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/07/full/1649270628-8781.jpg?im=FeatureCrop,width=826,height=465"} content={['Transparency is a core value of the charity. They strive to maintain open communication with donors, stakeholders, and the public, ensuring that every dollar donated is used effectively and efficiently. Regular reporting and updates are provided to showcase the impact of their projects', 'While the charity focuses on small-scale projects, they also adopt a scalable model. By meticulously planning and executing initiatives, they aim to create sustainable change that can be replicated in other communities, inspiring wider social transformation.']} flip={true}></FlipCon>
        
        <Footer/>
    </section>
  )
}

export default About