const CartDetailInformation = () => {
  return (
    <div className="p-4">
      <ul className="space-y-3">
        <li className="flex justify-between">
          <span className="text-sm font-semibold">Tạm tính:</span>
          <span className="text-sm font-semibold">1,000,000 ₫</span>
        </li>
        <li className="flex justify-between">
          <span className="text-sm font-semibold">Thuế (VAT):</span>
          <span className="text-sm font-semibold">10%</span>
        </li>
        <li className="flex justify-between">
          <span className="text-sm font-semibold">Phí vận chuyển:</span>
          <span className="text-sm font-semibold">Tính toán ở bước sau</span>
        </li>
        <hr />
        <li className="flex items-center justify-between font-bold">
          <div className="items-center">
            <span>Tổng tiền:</span>
            <p className="text-sm">(Đã bao gồm phí VAT)</p>
          </div>
          <span className="font-semibold">1,100,000 ₫</span>
        </li>
      </ul>
    </div>
  );
};

export default CartDetailInformation;
