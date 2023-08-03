// Khai báo kiểu dữ liệu cho mỗi bài viết (article)
interface Article {
  title: string;           // Tiêu đề bài viết
  url: string;             // Đường dẫn (URL) tới bài viết
  publishedAt: string;     // Ngày xuất bản của bài viết
  urlToImage: string;  // Đường dẫn (URL) tới hình ảnh minh họa của bài viết
  content:string
}

// Hàm fetchData sẽ trả về một mảng các bài viết (Article[]) dưới dạng Promise
export async function fetchData(): Promise<Article[]> {
  try {
    const apiKey = '826a3bed8e024ddc82f806908a56994a'; // Thay YOUR_API_KEY bằng API key của bạn

    // Gọi API để lấy dữ liệu từ nguồn tin tức
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2023-07-03&sortBy=publishedAt&apiKey=${apiKey}`
    );

    // Chuyển đổi dữ liệu trả về từ API thành đối tượng JSON
    const data: { articles: Article[] } = await response.json(); 
    // Trả về mảng các bài viết (Article[]) từ đối tượng JSON
    return data.articles;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error fetching data:', error); 
    // Trả về mảng rỗng nếu có lỗi
    return [];
  }
}
