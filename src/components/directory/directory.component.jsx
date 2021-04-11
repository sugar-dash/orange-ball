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
                linkURL: 'hats',
                id: 1
            },
            {
                title: 'shoes',
                imageURL: 'https://i.postimg.cc/3x01Pk8r/shoe.png',
                linkURL: 'shoes',
                id: 2
            },
            {
                title: 'jersey',
                imageURL: 'https://i.postimg.cc/TYGVjsqp/jersey.png',
                linkURL: 'jersey',
                id: 3
            },
            {
                title: 'men',
                imageURL:'https://i.postimg.cc/pTRBhkDy/men.png',
                linkURL: 'men',
                id: 4,
                size: 'large'
            },
            {
                title: 'women',
                imageURL: 'https://i.postimg.cc/HnP0NgF7/women.jpg',
                linkURL: 'women',
                id: 5,
                size: 'large'
            }]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }

}

export default Directory;