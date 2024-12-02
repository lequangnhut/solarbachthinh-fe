import Image from 'next/image';
import Link from 'next/link';

const ProductCategory = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:col-span-4 lg:col-span-2">
            <Link href="/">
              <div className="p-4 text-center">
                <div className="mb-4">
                  <Image
                    className="mx-auto h-20 w-20"
                    alt="Solar light"
                    src="/assets/images/products/solar-light.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Solar light</h3>
              </div>
            </Link>
          </div>

          <div className="col-span-6 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:col-span-4 lg:col-span-2">
            <Link href="/">
              <div className="p-4 text-center">
                <div className="mb-4">
                  <Image
                    className="mx-auto h-20 w-20"
                    alt="Tấm pin"
                    src="/assets/images/products/inveter1.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Tấm pin</h3>
              </div>
            </Link>
          </div>

          <div className="col-span-6 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:col-span-4 lg:col-span-2">
            <Link href="/">
              <div className="p-4 text-center">
                <div className="mb-4">
                  <Image
                    className="mx-auto h-20 w-20"
                    alt="Biến tần lưới"
                    src="/assets/images/products/inveter2.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Biến tần lưới</h3>
              </div>
            </Link>
          </div>

          <div className="col-span-6 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:col-span-4 lg:col-span-2">
            <Link href="/">
              <div className="p-4 text-center">
                <div className="mb-4">
                  <Image
                    className="mx-auto h-20 w-20"
                    alt="Biến tần kết hợp"
                    src="/assets/images/products/inveter3.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Biến tần kết hợp</h3>
              </div>
            </Link>
          </div>

          <div className="col-span-6 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:col-span-4 lg:col-span-2">
            <Link href="/">
              <div className="p-4 text-center">
                <div className="mb-4">
                  <Image
                    className="mx-auto h-20 w-20"
                    alt="Pin lưu trữ điện"
                    src="/assets/images/products/icon-battery.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Pin lưu trữ điện</h3>
              </div>
            </Link>
          </div>

          <div className="col-span-6 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:col-span-4 lg:col-span-2">
            <Link href="/">
              <div className="p-4 text-center">
                <div className="mb-4">
                  <Image
                    className="mx-auto h-20 w-20"
                    alt="ESS"
                    src="/assets/images/products/icon-ess.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">ESS</h3>
              </div>
            </Link>
          </div>

          <div className="col-span-12 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-medium text-gray-800">Tìm sản phẩm</h2>
            <form className="flex items-center">
              <input
                className="form-control flex-1 rounded-md border p-2"
                placeholder="Tìm sản phẩm"
                list="datalistOptionsProducts"
              />
              <datalist id="datalistOptionsProducts">
                <option value="ĐÈN NĂNG LƯỢNG MẶT TRỜI SOKOYO TECO" />
                <option value="TẤM PIN NĂNG LƯỢNG MẶT TRỜI CANADIAN 545W" />
                <option value="ĐÈN NĂNG LƯỢNG MẶT TRỜI SOKOYO SOLO" />
                <option value="ĐÈN NĂNG LƯỢNG MẶT TRỜI SOKOYO MATRIX" />
                <option value="ĐÈN NĂNG LƯỢNG MẶT TRỜI SOKOYO CAPSOL" />
              </datalist>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
