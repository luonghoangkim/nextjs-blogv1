import Link from "next/link";
import Layout from "../../components/layuot";
import Head from "next/head";

function CreatePost() {
  return ( 
    <Layout>
      <Head> <title> Đăng bài viết</title></Head>
      <div className='font-bebas-neue'>
        <h1 className='text-3xl font-bold mb-4'>Đăng bài viết</h1>
        <form>
          <div className='mb-4'>
            <label className='block font-bold'>Tiêu đề</label>
            <input
              type='text'
              value={''}
              className='border border-gray-300 rounded px-4 py-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block font-bold'>Nội dung</label>
            <textarea
              value={''}
              className='border border-gray-300 rounded px-4 py-2 w-full'
              rows={5}
            />
          </div>
          <div className='mb-4'>
            <label className='block font-bold'>Chọn hình ảnh</label>
            <input
              type='file'
              multiple
              accept='image/*'
              className='border border-gray-300 rounded px-4 py-2 w-full'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            Thêm bài viết
          </button> 
        </form>
        <div className="mt-10 ">
        <Link className="text-red-700 px-2 hover:text-blue-700 font-bold" href={'/crui_actions/edit_post'}> <p>Đi xem và chỉnh sửa bài viết đã thêm </p> </Link>
        </div>
      </div>
    </Layout>
  );
}

export default CreatePost;
