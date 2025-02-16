import React from "react";

const Tags = ({ uniqueTags, selectedTag, onTagClick }) => (
    <div className="tags-container">
        <div className="tags is-centered montaz-filmowanie-container">
            { ['Monta¿', 'Filmowanie'].map(tag => (
                <span
                    key={ tag }
                    className={ `tag ${tag.toLowerCase()} ${selectedTag === tag ? 'is-info' : ''}` }
                    onClick={ () => onTagClick(tag) }
                    style={ { cursor: 'pointer' } }
                >
                    { tag }
                </span>
            )) }
        </div>
        <div className="tags is-centered">
            { uniqueTags
                .filter(tag => !['Monta¿', 'Filmowanie'].includes(tag))
                .map(tag => (
                    <span
                        key={ tag }
                        className={ `tag ${tag.toLowerCase()} ${tag === selectedTag ? 'is-info' : 'is-light'}` }
                        onClick={ () => onTagClick(tag) }
                        style={ { cursor: 'pointer' } }
                    >
                        { tag }
                    </span>
                )) }
        </div>
    </div>
);

export default Tags;
