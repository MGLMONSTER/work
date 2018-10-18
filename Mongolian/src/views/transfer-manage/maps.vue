<template id="child-Outmap">
  <div id="allmap" :style="style"></div>
</template>

<script>
import { getCoordinates } from '@/api/transfer-manage/pwTfWay/index'
export default{
  data() {
    return {
      style: {
        width: '100%',
        height: '540px'
      }
    }
  },
  mounted() {
    this.feathData()
  },
  methods: {
    feathData() {
      getCoordinates(this.$route.params.id).then(response => {
        var map = new BMap.Map('allmap')
        map.centerAndZoom(new BMap.Point(response[0].lat, response[0].lng), 8)
        var opts = {
          'width': 250, // 信息窗口宽度
          'height': 80, // 信息窗口高度
          'title': '组织名称：', // 信息窗口标题
          'enableMessage': true // 设置允许信息窗发送短息
        }
        const coords = []
        for (var i = 0; i < response.length; i++) {
          var marker = new BMap.Marker(new BMap.Point(response[i].lat, response[i].lng)) // 创建标注
          var content = response[i].POrganizationDesc
          map.addOverlay(marker) // 将标注添加到地图中
          setMapEvent()
          addMapControl()
          addClickHandler(content, marker)
          if (response[i].lat != null) {
            	coords[i] = response[i].lat + '|' + response[i].lng
          }
        }
        addPolyline(coords)
        // 地图事件设置函数：
        function setMapEvent() {
          map.enableDragging() // 启用地图拖拽事件，默认启用(可不写)
          map.enableScrollWheelZoom() // 启用地图滚轮放大缩小
          map.enableDoubleClickZoom() // 启用鼠标双击放大，默认启用(可不写)
          map.enableKeyboard() // 启用键盘上下左右键移动地图
        }

        // 地图控件添加函数：
        function addMapControl() {
          // 向地图中添加缩放控件
          var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM })
          map.addControl(ctrl_nav)
          // 向地图中添加缩略图控件
          var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 })
          map.addControl(ctrl_ove)
          // 向地图中添加比例尺控件
          var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })
          map.addControl(ctrl_sca)
        }
        function addClickHandler(content, marker) {
          marker.addEventListener('mouseover', function(e) {
            openInfo(content, e)
          }
          )
        }
        function openInfo(content, e) {
          var p = e.target
          var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
          var infoWindow = new BMap.InfoWindow(content, opts) // 创建信息窗口对象
          map.openInfoWindow(infoWindow, point) // 开启信息窗口
        }
        // 向地图中添加线函数
        function addPolyline(coords) {
          var plPoints = [{ style: 'solid', weight: 2, color: 'rgb(166, 194, 222)', opacity: 0.6, points: coords }
          ]
          for (var i = 0; i < plPoints.length; i++) {
            var json = plPoints[i]
            var points = []
            for (var j = 0; j < json.points.length; j++) {
              var p1 = json.points[j].split('|')[0]
              var p2 = json.points[j].split('|')[1]
              points.push(new BMap.Point(p1, p2))
            }
            var line = new BMap.Polyline(points, { strokeStyle: json.style, strokeWeight: json.weight, strokeColor: json.color, strokeOpacity: json.opacity })
            map.addOverlay(line)
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
