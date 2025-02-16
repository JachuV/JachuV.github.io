import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import 'bulma/css/bulma.min.css'; // Import Bulma styles

const SocialIcons = () => {
    return (
        <div className="container">
            <div>
                <div className="level m-4">
                    <a href="https://youtube.com/@GoFilmKrotoszyn" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="level-item">
                        <FaYoutube size={ 70 } color="#ff0000" />
                    </a>
                    <a href="https://instagram.com/tosik_7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="level-item">
                        <FaInstagram size={ 70 } color="rgb(204, 99, 198)" />
                    </a>
                    <a href="https://facebook.com/profile.php?id=61553035468382" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="level-item">
                        <FaFacebook size={ 70 } color="#0866ff" />
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default SocialIcons;
