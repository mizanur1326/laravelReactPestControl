<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\backend\Price;
use App\Models\backend\Service;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function packeges()
    {
        $data['packeges'] = Price::all();
        return view('frontend.packege', $data);
    }

    public function services()
    {
        $data['services'] = Service::all();
        return view('frontend.services', $data);
    }


    public function order(Request $request)
    {

        $order = new Order();
        // $order_data = $request->all();
        $order_data = $request->except(['_token']);
        // $order_data = array_except($request->all(), ['_token']);
        $order_data['order_number'] = "ORD" . " " . rand(5, 5000);
        //  $order_data['quantity'] = 1;
        $order_data['country'] = "Bangladesh";
        //  $order_data['sub_total'] = "123";
        //  print_r($order_data) ; 
        // $request->session()->forget('cart');
        
        // $order->create($order_data);

        //  print_r(session('cart'));

        //  dd($order_data);
       
        // return Inertia::render('packeges', [
        //     'message' => 'Order Successfully Placed. Thank You for Order'
        // ]);

        if( $order->insert($order_data)){
            return redirect('packeges')->with('msg' , 'Order Successfully Placed. Thank You for Order');
        }


    }





    // CART Start

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()
    {
        $packeges = Price::all();
        return view('packeges', compact('packeges'));
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function cart()
    {
        return view('frontend.cart');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function addToCart($id)
    {
        $price = Price::findOrFail($id);

        $cart = session()->get('cart', []);

        if (isset($cart[$id])) {
            $cart[$id]['quantity']++;
        } else {
            $cart[$id] = [
                "name" => $price->name,
                "quantity" => 1,
                "price" => $price->price,
            ];
        }

        session()->put('cart', $cart);
        return redirect()->back()->with('success', 'Product added to cart successfully!');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function update(Request $request)
    {
        if ($request->id && $request->quantity) {
            $cart = session()->get('cart');
            $cart[$request->id]["quantity"] = $request->quantity;
            session()->put('cart', $cart);
            session()->flash('success', 'Cart updated successfully');
        }
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function remove(Request $request)
    {
        if ($request->id) {
            $cart = session()->get('cart');
            if (isset($cart[$request->id])) {
                unset($cart[$request->id]);
                session()->put('cart', $cart);
            }
            session()->flash('success', 'Product removed successfully');
        }
    }

    public function checkout(Request $request)
    {

        // $data = $request->session()->all();

        return view('frontend.checkout');
    }

    public function details($id)
    {

        $myPackage = Price::find($id);
        $user = Auth::guard('customer')->user() ?? '';
        $token = csrf_token();
        $userData = [
            'user' => $user,
            'token' => $token,
        ];
        return Inertia::render('Details', compact('myPackage', 'userData'));
    }



    public function myOrder()
    {
        // $orders = Order::all();
        $customer_id = Auth::guard('customer')->user()->id;
        // $product = Order::where('student_id', $student_id)->get();
        $orders = Order::where('customer_id', $customer_id)->get();
        // ->where('status', 0)

        return view('frontend.myorders', compact('orders'));
    }
}
