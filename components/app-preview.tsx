import { Phone } from "lucide-react"

export function AppPreview() {
  return (
    <div className="relative mx-auto max-w-[366px] md:max-w-none">
      <div className="relative z-10 overflow-hidden rounded-[40px] border bg-background shadow-xl md:flex">
        <div className="md:w-[366px]">
          <div className="flex items-center justify-center border-b p-4">
            <div className="h-2 w-16 rounded-full bg-muted" />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">Laundry Schedule</h3>
                <p className="text-sm text-muted-foreground">March 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs">
              <div className="text-muted-foreground">Mo</div>
              <div className="text-muted-foreground">Tu</div>
              <div className="text-muted-foreground">We</div>
              <div className="text-muted-foreground">Th</div>
              <div className="text-muted-foreground">Fr</div>
              <div className="text-muted-foreground">Sa</div>
              <div className="text-muted-foreground">Su</div>
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2 text-center text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground">27</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground">28</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground">29</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">1</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">2</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">3</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">4</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">5</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">6</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">7</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">8</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">9</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">10</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">11</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">12</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                13
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">14</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">15</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">16</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">17</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">18</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">19</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">20</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">21</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">22</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">23</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">24</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">25</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">26</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">27</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">28</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">29</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">30</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full">31</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground">1</div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 1</div>
                  <div className="text-sm text-muted-foreground">9:00 - 12:00</div>
                </div>
                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                  <Phone className="mr-1 h-3 w-3" />
                  <span>Reminder set for 8:30 AM</span>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 2</div>
                  <div className="text-sm text-muted-foreground">14:00 - 17:00</div>
                </div>
                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                  <Phone className="mr-1 h-3 w-3" />
                  <span>Reminder set for 13:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden border-l md:block md:w-[366px]">
          <div className="flex items-center justify-between border-b p-4">
            <div className="font-medium">Available Slots</div>
            <div className="text-sm text-muted-foreground">March 13, 2025</div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 1</div>
                  <div className="text-sm text-muted-foreground">9:00 - 12:00</div>
                </div>
                <div className="mt-2">
                  <button className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs text-primary-foreground">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 1</div>
                  <div className="text-sm text-muted-foreground">12:00 - 15:00</div>
                </div>
                <div className="mt-2">
                  <button className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs text-primary-foreground">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 1</div>
                  <div className="text-sm text-muted-foreground">15:00 - 18:00</div>
                </div>
                <div className="mt-2">
                  <button className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs text-primary-foreground">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 2</div>
                  <div className="text-sm text-muted-foreground">9:00 - 12:00</div>
                </div>
                <div className="mt-2">
                  <button className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs text-primary-foreground">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Laundry Room 2</div>
                  <div className="text-sm text-muted-foreground">18:00 - 21:00</div>
                </div>
                <div className="mt-2">
                  <button className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs text-primary-foreground">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -left-10 -right-10 -top-10 bg-gradient-to-br from-primary/20 to-primary/0 blur-3xl" />
    </div>
  )
}

