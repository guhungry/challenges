//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class BaseWireframe {
    static var mainStoryboard: UIStoryboard {
        return UIStoryboard(name: "Main", bundle: Bundle.main)
    }

    func pushScreen(from : UIViewController?, to : UIViewController?) {
        if let from = from as? UIViewController, let to = to as? UIViewController {
            from.navigationController?.present(to, animated: true)
        }
    }
}
