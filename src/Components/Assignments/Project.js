import './Project.css';
import React, { Fragment, useEffect, useState } from "react";

const userCards = [
    {
        name: "Big-Boss-Adda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqTuWe79vZYQpoXDn8J01bpwhDdu8Pm4pSQ&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        name: "brahmmi@ memes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthhY2pqVmLemJCluET7cp9Vti61qTwVeutw&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        name: "laddukavala",
        image: "https://i.ytimg.com/vi/zCBrSu4nRVU/maxresdefault.jpg",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        name: "singles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0KemVyjc9gwuqxyo0sp2wHJM23pH4YFpGQ&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        name: "shesha sai adda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05_h2fkCtmUfYob5XDE9IUl5RZhucx6hNLg&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
    {
        name: "yaparam edhi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiXVrkpzZnlHdBtXOHu4IaEGRulEwVPlW8A&usqp=CAU",
        like: false,
        likeCount: 0,
        heartAnimation: false,
    },
];

const Task = () => {
    const [users, setUsers] = useState(userCards);
    const [currpost,setCurrPost] =useState(-1)

    const LikeClick = (index) => {
        setUsers((prevcard) => {
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
        setUsers((prevcard) => {
            return prevcard.map((post, pindex) => {
                if (pindex === index) {
                    setCurrPost(index)
                    return (
                        { ...post, likeCount: 1, like: true ,heartAnimation:true }
                    )
                } else {
                    return (
                        post
                    )
                }

            })

        })
    }
    useEffect (()=>{
        if(currpost!==-1){
            setTimeout(()=>{
                setCurrPost(-1)
            },300)
        }
    },[currpost])

    return (
        <Fragment>

            <h2>Instagram Posts</h2>

            {users.map((user, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        <span className="post-name">
                            <i className="fas fa-user"></i> {user.name}
                        </span>
                        <div>Like: {user.likeCount}</div>
                    </div>
                    <div className="card-image" >
                        <img src={user.image}  onDoubleClick={() => picture(index)} alt=""/>
                        {user.heartAnimation && currpost==index &&(  <i className="fas fa-heart heart-icon" ></i> )}
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
