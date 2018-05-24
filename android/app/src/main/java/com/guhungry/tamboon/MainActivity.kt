package com.guhungry.tamboon

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import com.guhungry.tamboon.dummy.DummyContent

class MainActivity : AppCompatActivity(), DonationFragment.OnListFragmentInteractionListener {
    override fun onListFragmentInteraction(item: DummyContent.DummyItem?) {
        // TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
