import React from 'react';

export default class Card extends React.Component {
    onCart=()=>{
        this.props.onCart(this.props.card.id)
    }

    render() {
        const { card } = this.props;
        if (card) {
            return (
                <div class="card">
                    <img style={{width: 'auto', height: 200}} src={card.img} class="card-img-top" alt="logo1"></img>
                    <div class="card-body">
                        <h5 class="card-title">{card.name}</h5>

                        <p class="card-text"><del>{card.price}
                        </del>   <strong style={{ marginLeft: 100 }}>{card.sale}</strong> </p>
                        <p class="card-text"><button type="button" class="btn btn-primary" onClick={this.onCart}>Cart</button>
                            <button type="button" class="btn btn-outline-secondary">Thông tin chi tiết</button>
                        </p>
                    </div>
                </div>
            )
        }

        return (<div></div>)

    }
}
