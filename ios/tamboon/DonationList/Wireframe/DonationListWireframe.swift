//
// Created by Woraphot Chokratanasombat on 25/5/2018 AD.
// Copyright (c) 2018 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonationListWireframe : BaseWireframe, DonationListWireframeProtocol {
    class func createDonationListModule() -> UIViewController {
        let navController = mainStoryboard.instantiateInitialViewController()
        if let view = navController?.childViewControllers.first as? DonationListView {
            var presenter: DonationListPresenterProtocol = DonationListPresenter()
            let wireframe: DonationListWireframeProtocol = DonationListWireframe()

            view.presenter = presenter
            presenter.view = view
            presenter.wireframe = wireframe
            return navController!
        }
        return UIViewController()
    }

    func presentDonateScreen(from view: DonationListViewProtocol, for donation: DonationModel) {
        let target = UIViewController()
        pushScreen(from: view as? UIViewController, to: target)
    }
}
