import {
  // ChangeEventHandler
  ChangeEvent} from 'react' //func
import "./search-box.styles.css";

// const name:string = 'string'
//TS bắt buộc phải khai báo kiểu cho biến và ko được gán sai kiểu đã khai báo(giống c,java)

//func
// const func: (a:string,b:number,c:boolean) => void = (a,b,c) => {}
// Type ~ interface

// interface ISeachBoxProps extends IChangeHandlerProps{
//   // className:string;
//   // placeholder?:string; ? xác định có thể null

// }
// // interface cũng có thể đặt trùng tên ISeachBoxProps
// interface IChangeHandlerProps {
//     onChangeHandler: (e:string) => void
// }

type SearchBoxProps = {
  // Types allow us to do something known as a union.
  className:string;
  placeholder?:string; //? xác định có thể null


  // func: ChangeEventHandler<HTMLInputElement> Same 
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  // return về type 

  // <T> xác định sự kiện thay đổi
}

// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type USAddress = {
//   street: string;
//   state: string;
// }

// type ItalianAddress = {
//   street: string;
//   region:string;
// }

// // union kêts hợp cả hai có thể có province or state
// type Address = CanadianAddress | USAddress | ItalianAddress;

// const Address: Address = {
//   street:'address',
//   state:'ad'
// }

const SearchBoxComponent = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
  
  return (
    <input
      className={`${className} search-box`}
      type="search"
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
      // Nếu viết hẳn một hàm trong onchange thì nó sẽ là function ẩn(bỏ qua ko chạy đợi có thay đổi) , mỗi khi chương trình render nó lại tạo
      // ra một funcion và ko chạy ngay(ảnh hưởng đến hiệu xuất), chúng ta cũng ko cần cập nhật chức năng cho funcion mà chỉ là giá trị
    />
  );
};

export default SearchBoxComponent;
