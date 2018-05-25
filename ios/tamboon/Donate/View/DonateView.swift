//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit
import SDWebImage

class DonateView : UIViewController, DonateViewProtocol {
    @IBOutlet weak var picture: UIImageView!
    @IBOutlet weak var name: UILabel!
    var donation : DonationModel!

    override func viewDidLoad() {
        super.viewDidLoad()

        name.text = donation.name
        picture.sd_setImage(with: URL(string: donation.picture), placeholderImage: UIImage(named: "Dummy.jpg"))
    }
}
