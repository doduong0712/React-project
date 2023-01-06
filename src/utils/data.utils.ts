export const getData = async <T>(url:string): Promise<T> => {
    const respone = await fetch(url);
    return await respone.json();
}
// <T> để biết tham số General <T>starting type
// type T lấy dữ liệu sẽ nhận được một số kiểu T, kiểu T này là những gì bạn sẽ trả về từ hàm này bên trong một lời hứa.