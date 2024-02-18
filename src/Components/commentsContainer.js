import React from "react";


// comments can nested in n levels
const commentsData = [
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [  
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [  
                {
                    name: "kanchan",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                        {
                            name: "kanchan",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [  
                                {
                                    name: "kanchan",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                    replies: [  
                                        {
                                            name: "kanchan",
                                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                            replies: [  
                                                {
                                                    name: "kanchan",
                                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                                    replies: [  
                                                    ]  // its a arrray of again same comment
                                                },
                                            ]  // its a arrray of again same comment
                                        },
                                    ]  // its a arrray of again same comment
                                },
                            ]  // its a arrray of again same comment
                        },  
                    ]  // its a arrray of again same comment
                },
            ]  // its a arrray of again same comment
        },
    ]  // its a arrray of again same comment
},
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    name: "kanchan",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [  
                        {
                            name: "kanchan",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [  
                            ]  // its a arrray of again same comment
                        },
                    ]  // its a arrray of again same comment
                },
            ]  // its a arrray of again same comment
        },
    ]  // its a arrray of again same comment
},
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    name: "kanchan",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [  
                        {
                            name: "kanchan",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [  
                            ]  // its a arrray of again same comment
                        },
                    ]  // its a arrray of again same comment
                },
            ]  // its a arrray of again same comment
        },
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    name: "kanchan",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [  
                        {
                            name: "kanchan",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [  
                                {
                                    name: "kanchan",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                    replies: [  
                                    ]  // its a arrray of again same comment
                                },
                            ]  // its a arrray of again same comment
                        },
                    ]  // its a arrray of again same comment
                },
            ]  // its a arrray of again same comment
        },
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
            ]  // its a arrray of again same comment
        },
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    name: "kanchan",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [  
                        {
                            name: "kanchan",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [  
                            ]  // its a arrray of again same comment
                        },
                        {
                            name: "kanchan",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [  
                            ]  // its a arrray of again same comment
                        },
                    ]  // its a arrray of again same comment
                },
            ]  // its a arrray of again same comment
        },
    ]  // its a arrray of again same comment
},
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
            ]  // its a arrray of again same comment
        },
    ]  // its a arrray of again same comment
},
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
    ]  // its a arrray of again same comment
},
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
            ]  // its a arrray of again same comment
        },
    ]  // its a arrray of again same comment
},
{
    name: "kanchan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
            ]  // its a arrray of again same comment
        },
        {
            name: "kanchan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    name: "kanchan",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                    ]  // its a arrray of again same comment
                },
            ]  // its a arrray of again same comment
        },
    ]  // its a arrray of again same comment
},
];

const Comment = ({data}) => {
const {name, text, replies} = data;
  return(
    <div className="flex shadow-sm bg-gray-100 p-1 rounded-lg my-2">
        <img className="h-10 w-10" alt="user" src="https://imechinstitute.com/wp-content/uploads/2022/06/vector.jpeg" />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
};

const CommentsList = ({comments}) => {
    // don't use index as a key
    return comments.map((comment, index) => (
        <div key={index}>
             <Comment data={comment}/>
             <div className="pl-5 border border-l-black ml-5">
             <CommentsList comments={comment.replies}/>
             </div>
        </div>
    ));
};

const CommentsContainer = () => {
    return(
        <div className="m-5 p-2">
           <h1 className="text-2xl font-bold">comments :</h1>
           <CommentsList comments={commentsData}/>
        </div>
    );
};


export default CommentsContainer;