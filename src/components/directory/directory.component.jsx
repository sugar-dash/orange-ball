import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageURL: 'https://i.postimg.cc/yxhF4hB1/hats.jpg',
                id: 1
            },
            {
                title: 'shoes',
                imageURL: 'https://i.postimg.cc/TYGVjsqp/jersey.png',
                id: 2
            },
            {
                title: 'jersey',
                imageURL: 'https://i.postimg.cc/3x01Pk8r/shoe.png',
                id: 3
            },
            {
                title: 'men',
                imageURL:'https://i.postimg.cc/pTRBhkDy/men.png',
                id: 4,
                size: 'large'
            },
            {
                title: 'women',
                imageURL: 'https://i.postimg.cc/HnP0NgF7/women.jpg',
                id: 5,
                size: 'large'
            }]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageURL,id,size}) => (
                        <MenuItem key={id} title={title} imageURL={imageURL} size={size}/>
                    ))
                }

            </div>
        )
    }

}

export default Directory;