import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import styles from './Header.module.scss';

function Header()
{
    const [menuClick, setMenuClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    function menuIsClicked()
    {
        if(!menuClick)
        {
            setMenuClick(true);
        }
        else
        {
            setMenuClick(false);
        }
    }

    useEffect(() =>
    {
        window.addEventListener('scroll', () =>
        {
            if(window.scrollY > 0)
            {
                setIsScrolled(true);
            }
            else
            {
                setIsScrolled(false);
            }
        })
    });

    return (
        <header className={isScrolled ? styles.scroll : ''}>
            <nav>
                <div className={styles.logo}>
                    <Link
                        to='hero'
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        RAP
                    </Link>
                </div>
                <div className={styles.nav}>
                    <Link
                        to='About'
                        spy={true}
                        smooth={true}
                        offset={-25}
                        duration={500}
                        isDynamic={true}
                    >
                        About
                    </Link>
                    <Link
                        to='Skills'
                        spy={true}
                        smooth={true}
                        offset={-25}
                        duration={500}
                        isDynamic={true}
                    >
                        Skills
                    </Link>
                    <Link
                        to='Experience'
                        spy={true}
                        smooth={true}
                        offset={-25}
                        duration={500}
                        isDynamic={true}
                    >
                        Experience
                    </Link>
                    <Link
                        to='Work'
                        spy={true}
                        smooth={true}
                        offset={-25}
                        duration={500}
                        isDynamic={true}
                    >
                        Work
                    </Link>
                    <Link
                        to='Projects'
                        spy={true}
                        smooth={true}
                        offset={-25}
                        duration={500}
                        isDynamic={true}
                    >
                        Projects
                    </Link>
                    <a href='/docs/RobertPangilinanResumeIT.pdf' target='_blank' rel='noreferrer'>Resume</a>
                </div>
                <div className={styles.menu}>
                    <button aria-label='Menu' onClick={menuIsClicked}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </button>
                    <div className={`${styles.menuNav} ${menuClick ? styles.open : ''}`}>
                        <nav>
                            <Link
                                to='About'
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                isDynamic={true}
                                onClick={menuIsClicked}
                            >
                                About
                            </Link>
                            <Link
                                to='Skills'
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                isDynamic={true}
                                onClick={menuIsClicked}
                            >
                                Skills
                            </Link>
                            <Link
                                to='Experience'
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                isDynamic={true}
                                onClick={menuIsClicked}
                            >
                                Experience
                            </Link>
                            <Link
                                to='Work'
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                isDynamic={true}
                                onClick={menuIsClicked}
                            >
                                Work
                            </Link>
                            <Link
                                to='Projects'
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                isDynamic={true}
                                onClick={menuIsClicked}
                            >
                                Projects
                            </Link>
                            <a href='/docs/RobertAndrewPangilinan-Resume.pdf' target='_blank' rel='noreferrer'>Resume</a>
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;