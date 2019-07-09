import React, { Component } from 'react'
import RealCategoriesSide from './realcatigoriesside/RealCategoriesSide';
import RealCategoriescontent from './realcategoriescontent/RealCategoriescontent';
import './realcategories.scss'

export default class RealCategories extends Component {
    constructor(props){
        super(props)
        this.state = {
            opentab: 1
        }
    }
    // Категории должны принимать список навзвание табов
    // и список контент табов как массив, они будут автоматически распределятсья
    // Для возможности повторного использования этот подход логичный
    changeOpenTab = (indicator, title, id) => {
        const curUrl = window.location.href,
        curIndex = curUrl.lastIndexOf('/'),
        newUrlStart = curUrl.slice(0, curIndex)
        window.history.pushState('page', title, newUrlStart + '/' + id);
        this.setState({
            opentab: indicator
        })
    }

    componentWillMount(){
        const curUrl = window.location.href,
              curIndex = curUrl.lastIndexOf('/'),
              needId = curUrl.slice(curIndex + 1)
              this.setState({
                opentab: needId ? needId : 1
              })
    }



    render() {
        return (
            <div className="d-flex">
                <h2>{this.props.title}</h2>
                <div className="realcategories-main">
                    <RealCategoriesSide changeOpenTab={(indicator, title, id)=> this.changeOpenTab(indicator, title, id)} items={this.props.tabItems} opentab={this.state.opentab}/>
                    <RealCategoriescontent contentitem={this.props.contentItems} opentab={this.state.opentab} />
                </div>
            </div>
        )
    }
}
