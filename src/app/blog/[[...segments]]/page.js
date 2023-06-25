const SingleBlog = ({params}) => {
    const[year, id]=params.segments || [];
    return (
        <div>
            <h2>single blog: {year || new Date().getFullYear()} for {id}</h2>
        </div>
    );
};

export default SingleBlog;