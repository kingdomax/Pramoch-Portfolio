import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      /*mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);*/
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'React',
    'TypeScript/JavaScript',
    'C#',
    'ASP.NET',
    'PostgreSQL',
    'Docker',
    'Node.js',
    'HTML/CSS',
    'Unity',
    'Unity Netcode',
    'Photon Engine',
    'Meta XR SDKs',
    'XR Interaction Toolkit',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey there! I’m Pramoch, a software engineer from Thailand who loves building things
              that make users happy. My goal is to build software that helps people and makes their
              day-to-day easier.
            </p>

            <p>
              My software development journey began back in 2014 when I built my first project—a VR
              military training simulator. That early experience ignited my passion for building
              meaningful projects, and I've enjoyed developing software ever since.
            </p>

            <p>
              I spent several years as a seasoned engineer at{' '}
              <a href="https://agoda.com">a large tech company</a>, developing, testing, and
              maintaining a web application that handled over 10 million requests a day. During that
              time, I got to collaborate with some awesome folks from all over the world — frontend,{' '}
              backend, mobile, data, UX/UI — you name it!
            </p>

            <p>
              Fast forward to now, I’m pursuing my{' '}
              <a href="https://www.uni-weimar.de/en/media/chairs/computer-science-department/vr">
                master’s degree
              </a>{' '}
              in Computer Science in Germany, focusing on software development, data visualization
              and extended reality.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/moch.jpg"
              width={500}
              quality={95}
              formats={['PNG', 'WEBP']} // Netlify only support png, svg, if use their automate CI,CD
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
