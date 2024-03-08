let darkmode =
  "sidebar-o sidebar-dark side-scroll page-header-fixed main-content-narrow";
let lightmode =
  "sidebar-o sidebar-light side-scroll page-header-fixed main-content-narrow";
let initial = 1;
var mod =
  "sidebar-o sidebar-dark side-scroll page-header-fixed main-content-narrow";

if (initial !== 1) {
  mod =
    "sidebar-o sidebar-light side-scroll page-header-fixed main-content-narrow";
}
export default mod;
export function toggle() {
  initial = initial === 1 ? 0 : 1;
  console.log(initial);
}
