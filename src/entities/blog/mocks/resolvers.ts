import { HttpResponseResolver, HttpResponse } from 'msw';

const MOCK_BLOGS = [
  {
    createdAt: '2024-05-24T05:59:16.028Z',
    title: 'Thứ trưởng Bộ Công an Trần Quốc Tỏ tới hiện trường vụ cháy ở Hà Nội',
    image: 'https://photo.znews.vn/w660/Uploaded/oplukaa/2024_05_23/H1_1.jpg',
    content:
      'Liên quan đến vụ cháy nhà trọ 5 tầng trong ngõ 119 phố Trung Kính (phường Trung Hòa, quận Cầu Giấy, Hà Nội), 6h30 ngày 24/5, Thượng tướng Trần Quốc Tỏ, Thứ trưởng phụ trách Bộ Công an đã đến hiện trường vụ cháy để kiểm tra và chỉ đạo công tác khắc phục hậu quả.\n\nĐi cùng đoàn có Thứ trưởng Bộ Công an Nguyễn Văn Long và Giám đốc Công an TP Hà Nội.\n\n\nChay nha tro Trung Kinh anh 1\nThượng tướng Trần Quốc Tỏ - Thứ trưởng phụ trách Bộ Công an đã đến hiện trường vụ cháy nhà trọ ở phường Trung Kính. Ảnh: Đình Hiếu\n\nChay nha tro Trung Kinh anh 2\nThượng tướng Trần Quốc Tỏ và Giám đốc Công an TP Hà Nội vào hiện trường vụ cháy. Ảnh: Đình Hiếu.\nTrước đó, 4h30 sáng cùng ngày, đại diện Phòng Cảnh sát PCCC&CNCH Công an TP Hà Nội cho biết, công tác cứu hộ, cứu nạn đã thực hiện xong.\n\n\nChay nha tro Trung Kinh anh 3\nHình ảnh tại hiện trường vụ cháy. Ảnh: Đình Hiếu.\nTheo thông tin ban đầu, cơ quan chức năng xác định có 14 người chết và đang tiếp tục thống kê, xác định danh tính.',
    id: '3',
    description:
      'Thứ trưởng Bộ Công an Trần Quốc Tỏ đã tới hiện trường vụ cháy nhà trọ 5 tầng ở phường Trung Hòa (quận Cầu Giấy, Hà Nội) để kiểm tra và chỉ đạo công tác khắc phục hậu quả.',
  },
  {
    createdAt: '2024-05-24T01:44:21.352Z',
    title: '12 giờ truy bắt kẻ sát hại, bỏ thi thể cô gái vào vali',
    image: 'https://photo.znews.vn/w210/Uploaded/oplukaa/2024_05_19/anh1_14.jpg',
    content:
      'Ngày 24/5, Cơ quan CSĐT Công an tỉnh Bà Rịa - Vũng Tàu tạm giữ hai nghi phạm là Võ Thành Long (20 tuổi, trú xã Tam Phước, huyện Long Điền) và Vũ Thành Huy (25 tuổi, trú xã Hoà Long, TP Bà Rịa) để điều tra, làm rõ vụ án sát hại, giấu xác một cô gái trong vali đưa lên núi Nhỏ, TP Vũng Tàu phi tang. Giet co gai 21 tuoi anh 1 Nghi phạm Võ Thành Long (bên trái) và Vũ Thành Huy tại cơ quan công an. Ảnh: CACC. Trước đó, chiều ngày 22/5, Phòng Cảnh sát hình sự Công an tỉnh Bà Rịa - Vũng Tàu nhận được yêu cầu của Công an huyện Cần Giờ, TPHCM về việc phối hợp để xác minh trường hợp một cô gái mất tích. Người mất tích là chị T., 21 tuổi, trú tại huyện Cần Giờ, TPHCM. Vào cuộc xác minh, Công an tỉnh Bà Rịa - Vũng Tàu xác định được chị T. từ Cần Giờ đến TP Vũng Tàu đi chơi với hai nam thanh niên. Ngày 19/5, chị T. lưu trú tại một khách sạn ở phường 2, TP Vũng Tàu cùng một trong hai thanh niên này. Sau đó, chị T. mất tích, nghi do bị sát hại. Qua rà soát địa bàn, công an xác định nghi phạm là Võ Thành Long - nam thanh niên ở cùng chị T. tại khách sạn. Người còn lại là một đối tượng không rõ lai lịch. Bằng các biện pháp nghiệp vụ, khoảng 3h sáng ngày 23/5, các trinh sát Phòng Cảnh sát hình sự Công an tỉnh Bà Rịa - Vũng Tàu đã bắt giữ được Long khi y đang lẩn trốn tại quận Bình Tân, TPHCM sau 12 giờ gây án. Qua khai thác nhanh, nghi phạm Long thừa nhận đã sát hại chị T. để chiếm đoạt tải sản, rồi cùng bạn là Vũ Thành Huy lên kế hoạch phi tang thi thể nạn nhân tại khu vực núi ở TP Vũng Tàu. Từ lời khai của Long, Huy nhanh chóng bị bắt giữ. Giet co gai 21 tuoi anh 2 Chiếc vali Long và Huy dùng để đựng thi thể nạn nhân, đưa lên khu đất trống ở núi Nhỏ, TP Vũng Tàu phi tang. Ảnh: CACC. Giấu thi thể nạn nhân trong vali, mang lên núi phi tang Tại cơ quan công an, bước đầu Võ Thành Long khai quen biết với chị T. thông qua mạng xã hội Facebook. Ngày 18/5, Long cùng Huy thuê xe taxi đón chị T. đi chơi tại TP Vũng Tàu. Đến khoảng 0h ngày 19/5, Long và chị T. về một khách sạn ở khu Á Châu, phường 2 nghỉ ngơi. Tại đây, khi phát hiện chị T. mang theo nhiều tài sản và trang sức có giá trị, Long nảy sinh ý định sát hại để chiếm đoạt. Long đã dùng tay bóp cổ chị T. tử vong. Tiếp đó, Long nhắn tin báo cho Huy biết sự việc, để bàn bạc chuyện phi tang thi thể nạn nhân. Sáng cùng ngày, Long đi mua vali rồi cùng Huy đặt thi thể chị T. vào trong, mang lên bỏ tại khu đất trống ở núi Nhỏ, TP Vũng Tàu. Cả hai đã mang số tài sản lấy được của nạn nhân đi bán, lấy tiền tiêu xài cá nhân. Riêng chiếc điện thoại iPhone 12 Promax của chị T., đối tượng Huy giữ trong người cho đến khi bị bắt.',
    id: '4',
    description:
      'Sau khi sát hại cô gái 21 tuổi để chiếm đoạt tài sản, Long nhắn tin bàn bạc với bạn lên kế hoạch mua vali, bỏ thi thể nạn nhân vào bên trong, mang lên núi Nhỏ phi tang.',
  },
  {
    createdAt: '2024-05-24T06:18:56.398Z',
    title: 'Phó chủ tịch Quốc hội và Bộ trưởng Y tế thăm các nạn nhân vụ cháy',
    image: 'https://photo.znews.vn/w960/Uploaded/yrfjpyesfly/2024_05_24/chay_trung_kinh.jpg',
    content:
      'Sáng 24/5, Phó chủ tịch Quốc hội Trần Quang Phương và Bộ trưởng Y tế Đào Hồng Lan đến thăm hỏi động viên các nạn nhân trong vụ cháy khu nhà trọ ở phố Trung Kính, phường Trung Hoà, quận Cầu Giấy, TP Hà Nội.\n\nTS.BS Bùi Tuấn Anh, Giám đốc Bệnh viện Giao thông Vận tải, cho biết tính đến 9h cùng ngày, số bệnh nhân nhập viện tăng lên 6 người. Trong đó, 4 người lớn và 2 trẻ nhỏ. Hiện 4 người nằm tại khoa Cấp cứu, 2 người nằm tại Hồi sức tích cực. Các bệnh nhân đang được thở oxy và chăm sóc đặc biệt.\n\nNgười có tình trạng nặng nhất là cụ bà N.T.K. (84 tuổi). Bà K. nhập viện trong tình trạng tỉnh, kích thích. Người bám đây tro bụi đen Khó thở, nói từng chữ. Sau khi được xử trí thở oxy và corticoid, khí dung, tình trạng đã ổn hơn.\n\nBác sĩ Bùi Tuấn Anh cho biết thêm đối với những bệnh nhân tử vong ngoài viện do bệnh viện không có nhà xác nên nạn nhân đã được di chuyển đi nơi khác.\n\nPhó Chủ tịch Quốc hội Trần Quang Phương chỉ đạo Bệnh viện Giao thông Vận tải cố chuẩn bị đẩy đủ nhân lực, vật lực cố gắng cứu chữa nạn nhân, giảm thiểu tối đa thiệt hại về người.',
    id: '5',
    description:
      'Bệnh viện Giao thông Vận tải cho biết đang điều trị cho 6 nạn nhân trong vụ cháy xảy ra trong đêm tại phố Trung Kính (Hà Nội).',
  },
];

export const getBlogsResolver: HttpResponseResolver = () => {
  return HttpResponse.json(MOCK_BLOGS, { status: 200 });
};

export const createBlogResolver: HttpResponseResolver = async ({ request }) => {
  const newBlog = await request.json();
  console.log('Captured a "POST /blogs" request', newBlog);
  return HttpResponse.json(newBlog, { status: 201 });
};
