import React from 'react';
import cn from 'classnames';


const Categories = React.memo( ({items, category, selectCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li className={cn({'active': category === null})} onClick={()=> selectCategory(null)}>Все</li>
                {items.map((cat, index) => <li className={cn({'active': category === index})}
                                               key={`${cat}_${index}`} onClick={() => selectCategory(index)}>{cat}</li>)}
            </ul>
        </div>
    )
});

export default Categories;