import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //early return pattern
    if(!isMenuOpen) return null;
    return(
        <div className="p-6 shadow-2xl w-48 h-1/2 sticky top-0">
        <ul>
            <li className="pt-4 flex items-center"><Link to={"/"} className="flex"><img className="h-6 w-6 mr-2" src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"/>Home</Link></li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png"/>Shorts</li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png"/>Subscription</li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://cdn0.iconfinder.com/data/icons/multimedia-261/32/Send-512.png"/>Share</li>
           </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
           <ul>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/73/73814.png"/>Favorite</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/2817/2817856.png"/>Sports</li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://static.thenounproject.com/png/3971486-200.png"/>Popular</li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://cdn-icons-png.freepik.com/512/16/16078.png"/>Star</li>
           </ul>
           <h1 className="font-bold pt-5">Watch Later</h1>
           <ul>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://png.pngtree.com/png-vector/20210219/ourmid/pngtree-hat-cook-icon-template-vector-png-image_2924606.jpg"/>Cooking</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/985/985709.png"/>Save</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://static.thenounproject.com/png/2146857-200.png"/>Live</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn2.iconfinder.com/data/icons/maki/100/cricket-512.png"/>Circket</li>
           </ul>
           <h1 className="font-bold pt-5">Explore</h1>
           <ul>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/3128/3128568.png"/>Trending</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://static.thenounproject.com/png/1842098-200.png"/>Shopping</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3yCrBIjJ_xI-bv1Rra3v8W8_0q0m77j-Q8A-OFUNFA&s"/>Music</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn-icons-png.freepik.com/512/7713/7713741.png"/>Gaming</li>
            <li className="pt-4 flex"><img className="h-8 w-8 mr-2" src="https://www.shutterstock.com/image-vector/newspaper-icon-vector-template-600nw-1269716161.jpg"/>News</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/2817/2817856.png"/>Sports</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkzD0Zq2_J_qCQsa3LOESJ4871o0rBBR8VQ&s"/>Learning</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmjVpeGicJOtSFHryjRdyFQ_20lQBI7AXRQ&s"/>Fashion</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPRBn0qv0QwpoFNaMx3N73XccACytHH6cpg&s" alt="Beauty"/>Beauty</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://w7.pngwing.com/pngs/456/202/png-transparent-podcast-radio-others-logo-radio-station-edit-icon-thumbnail.png" alt="Podcast"/> Podcasts</li>
           </ul>
           <h1 className="font-bold pt-5">More from YouTube</h1>
           <ul>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://e7.pngegg.com/pngimages/874/367/png-clipart-youtube-premium-logo-television-youtube-angle-rectangle.png" /> Premium</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZufrzqqXgEzQXz6rMkQ6-N6JW6ncZopCA3_gEhoKG2Q&s" />Studio</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://static.vecteezy.com/system/resources/previews/017/395/384/original/youtube-music-icon-free-png.png" /> Music</li>
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://e7.pngegg.com/pngimages/834/95/png-clipart-youtube-kids-child-mobile-app-youtube-emblem-child.png" /> Kids</li>
           </ul>
           <ul className="pt-5">
            <li className="pt-4 flex"><img className="h-6 w-6 mr-2" src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-studio-4560393-3789457.png?f=webp" />Setting</li>
            <li className="pt-4 flex"><img className="h-4 w-6 mr-2" src="https://cdn-icons-png.freepik.com/512/455/455582.png"/>Report</li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://w7.pngwing.com/pngs/317/872/png-transparent-youtube-play-button-computer-icons-help-text-trademark-sign-thumbnail.png" />Help</li>
            <li className="pt-4 flex"><img className="h-5 w-5 mr-2" src="https://static.thenounproject.com/png/4808951-200.png"/>Send Feedback</li>
           </ul>
 
        </div>
    );
};

export default Sidebar;