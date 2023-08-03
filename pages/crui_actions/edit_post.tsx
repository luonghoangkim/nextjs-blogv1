import Link from "next/link"; 

const EditPost = () => {
    return( 
            <div>
                <p>  Chỉnh sửa bài viết ở đây </p>
               <Link href={'/crui_actions/creater'}>quay về đăng bài</Link>
                </div> 
            
    );
}

export default EditPost;