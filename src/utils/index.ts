import { Notify } from 'vant';

export function getLocation(callback: PositionCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback);
  } else {
    Notify({
      type: 'warning',
      message: '当前无法获取经纬度',
    });
  }
}
