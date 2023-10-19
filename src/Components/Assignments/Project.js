import './Project.css';
import React, { Fragment, useEffect, useState } from "react";

const userCards = [
    {
        PageName: "Big-Boss-Adda",
        MemePost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqTuWe79vZYQpoXDn8J01bpwhDdu8Pm4pSQ&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        PageName: "brahmmi@ memes",
        MemePost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthhY2pqVmLemJCluET7cp9Vti61qTwVeutw&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        PageName: "laddukavala",
        MemePost: "https://i.ytimg.com/vi/zCBrSu4nRVU/maxresdefault.jpg",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        PageName: "singles",
        MemePost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0KemVyjc9gwuqxyo0sp2wHJM23pH4YFpGQ&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        PageName: "shesha sai adda",
        MemePost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05_h2fkCtmUfYob5XDE9IUl5RZhucx6hNLg&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        PageName: "yaparam edhi",
        MemePost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiXVrkpzZnlHdBtXOHu4IaEGRulEwVPlW8A&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
];




const Task = () => {
    const [UserCards, setUserCards] = useState(userCards);
    const [currpost, setCurrPost] = useState(-1)


    const [MemePost, setMemePost] = useState("")
    const [PageName, setPageName] = useState("")
   

    const handlechangeMemePost =(e)=>{
        setMemePost(e.target.value)
    }

    const handlechangePageName =(e)=>{
        setPageName(e.target.value)
    }

    const onsubmit =()=>{
        setUserCards([...userCards,{MemePost:MemePost,PageName}])
        setMemePost("")
         setPageName("")
       
    }
    
    const LikeClick = (index) => {
        setUserCards((prevcard) => {
            return prevcard.map((post, pindex) => {
                if (pindex === index) {
                    return (
                        { ...post, likeCount: post.like ? 0 : 1, like: !post.like }
                    )
                } else {
                    return (
                        post
                    )
                }
            })
        })
    };
    const picture = (index) => {
        setUserCards((prevcard) => {
            return prevcard.map((post, pindex) => {
                if (pindex === index) {
                    setCurrPost(index)
                    return (
                        { ...post, likeCount: 1, like: true, heartAnimation: true }
                    )
                } else {
                    return (
                        post
                    )
                }
            })
        })
    }
    useEffect(() => {
        if (currpost !== -1) {
            setTimeout(() => {
                setCurrPost(-1)
            }, 300)
        }
    }, [currpost])

    return (
        <Fragment>
            <div className="container">
                <h2>
                    <span style={{ color: "red" }}>User</span>
                    <span style={{ color: "green" }}>Inputs</span>
                </h2>
                <div className="row">
                    <div className="col-md-12">
                        <label>
                            memeimage:
                            <input
                                type=""
                                className="form-control"
                            value={MemePost}
                            onChange={(e) => handlechangeMemePost(e)}
                            />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>
                            memepage:
                            <input
                                type="PageName"
                                className="form-control"
                            value={PageName}
                            onChange={(e) => handlechangePageName(e)}
                            />
                        </label>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-12">
                        <button className="btn btn-primary"  onClick={onsubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>


            <h2>Instagram Posts</h2>
            {UserCards.map((user, index) => (
                <div className="card"  key={index}>
                    <div className="card-header" >
                        <span className="post-PageNmae">
                            <i className="fas fa-user"></i> {user.PageName}
                        </span>
                        <div>Like: {user.likeCount}</div>
                    </div>
                    <div className="card-MemePost" >
                        <img src={user.MemePost} onDoubleClick={() => picture(index)} alt="" />
                        {user.heartAnimation && currpost == index && (<i className="fas fa-heart heart-icon" ></i>)}
                    </div>
                    <div className="card-icons">
                        <i className={user.like ? "fas fa-heart like" : "far fa-heart"} onClick={() => LikeClick(index)} ></i>
                        <p className="icon-text"></p>
                        <i class="fa-regular fa-comment"></i>
                        <p className="icon-text"></p>
                        <i class="fa-regular fa-share-from-square"></i>
                        <p className="icon-text"></p>
                        <i className="far fa-bookmark"></i>
                    </div>
                    <div>
                        <p>
                            View All Comments
                        </p>
                    </div>
                </div>
            ))}
        </Fragment>
    );
}
export default Task;
