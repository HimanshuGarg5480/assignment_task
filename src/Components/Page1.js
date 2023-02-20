import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Page1 extends Component {
  constructor(){
    super();
    this.state={
        images:[],
        parr:[1],
        curPage:1
    }
  }

  async componentDidMount (){
    let res = await axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=mcJXRvwjg-QJutcd11ZwudTfjbJbGU2IBOGr4Wsv4Gw");
    let data = res.data;
    console.log(data);
    this.setState({
        images:[...data.results]
    })
  }

  changeImages=async()=>{
    // console.log(this.state.curPage)
    let res = await axios.get(`https://api.unsplash.com/search/photos?page=${this.state.curPage}&query=office&client_id=mcJXRvwjg-QJutcd11ZwudTfjbJbGU2IBOGr4Wsv4Gw`);
    
    let data = res.data;
    this.setState({
        images:[...data.results]
    })
}

  onLeftClick=()=>{
    let temp = [];
    
    for(let i=1;i<this.state.curPage;i++){
        temp.push(i);
    }
    this.setState({
        parr:[...temp],
        curPage:this.state.curPage-1
    },this.changeImages)
    // console.log(this.state.curPage);
}

handleClick=(value)=>{
    this.setState({
        curPage:value
    },this.changeImages)
}

onRightClick=()=>{
    let temp = [];
    for(let i=1;i<=this.state.curPage+1;i++){
        temp.push(i);
    }
    this.setState({
        parr:[...temp],
        curPage:this.state.curPage+1
    },this.changeImages)
    // console.log(this.state.curPage);
}

handleImageClick=(obj)=>{
    localStorage.setItem("image-app",JSON.stringify(obj))
}
  
    render() {
    return (
        <>
        {
            this.state.images.length==0?
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>:
            <div>
            
                <div className="images-list">
                    {
                        this.state.images.map((imageobj)=>(
                        <Link to={'/FullSizeImg'}>
                            <div class="card images-card" onClick={()=>{this.handleImageClick(imageobj.urls.raw)}}>
                                <img src={imageobj.urls.full} class="card-img-top image-size" alt="..."/>
    
                            </div>
                        </Link>
                            
                        ))
                    }
                </div>
                
            </div>
        }
        <div style={{display:"flex", justifyContent:"center"}}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" onClick={this.onLeftClick}>Previous</a></li>
                        {
                            this.state.parr.map((value)=>(
                                <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
                            ))
                        }
                        
                        
                        <li class="page-item"><a class="page-link" onClick={this.onRightClick}>Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
        
    )
  }
}











