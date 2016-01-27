function AS_Segment_669e2e077dd6482eb6c96e639f716235(eventobject, sectionNumber, rowNumber) {
    setCurrentFlightInfo.call(this, rowNumber);
    KonyWatchUtils.navigateToForm(eventobject, "frmCheckin", null);
}