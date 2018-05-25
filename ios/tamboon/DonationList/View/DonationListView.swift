//
//  DonationListPresenter.swift
//  tamboon
//
//  Created by Woraphot Chokratanasombat on 24/5/2561 BE.
//  Copyright © 2561 Woraphot Chokratanasombat. All rights reserved.
//

import UIKit

class DonationListView: UIViewController, UITableViewDelegate, UITableViewDataSource  {
    @IBOutlet weak var tableDonation: UITableView!
    var presenter: DonationListPresenterProtocol?
    private var donations : [DonationModel] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.
        presenter?.onReceived(donations: [
            DonationModel(name: "baee", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/9b59dba2e1d2a11f-profile_image-70x70.png"),
            DonationModel(name: "baa", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/9b59dba2e1d2a11f-profile_image-70x70.png"),
            DonationModel(name: "fdae", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/9b59dba2e1d2a11f-profile_image-70x70.png")
        ])
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return donations.count;
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = self.tableDonation.dequeueReusableCell(withIdentifier: "DonationRow", for: indexPath) as? DonationTableCellView {
            cell.set(donation: donations[indexPath.row])
            return cell
        }
        return UITableViewCell()
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        presenter?.showDonate(forDonation: donations[indexPath.row])
    }

    func tableView(_ tableView: UITableView, willSelectRowAt indexPath: IndexPath) -> IndexPath? {
        return indexPath
    }
}

extension DonationListView : DonationListViewProtocol {
    func showDonations (with donations: [DonationModel]) {
        self.donations = donations
    }
}

