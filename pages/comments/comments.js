
const Comments = ({comments}) => {
    console.log(comments);
    return (
        <div>
            {
                comments.map(com=><h1 key={com.id} className="m-10 text-lg">Comment Body :  {com.body}</h1>)
            }
        </div>
    );
};

export default Comments;


//get server side props
export const getServerSideProps = async() =>{
    
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json();

    return{
        props : {
            comments : data
        }
    }
}